-- Supabase SQL editor에서 그대로 실행하세요.

-- 1. 타임어택 글로벌 랭킹
create table scores (
  id bigint generated always as identity primary key,
  name text not null,
  score int not null,
  created_at timestamptz not null default now()
);

alter table scores enable row level security;

create policy "anyone can read scores" on scores
  for select using (true);

create policy "anyone can insert a reasonable score" on scores
  for insert with check (score between 0 and 1000 and length(name) <= 12);

-- 2. 서포터(펀딩 리워드) 전용 콘텐츠 잠금해제 코드
create table redeem_codes (
  code text primary key,
  name text,
  redeemed_at timestamptz
);

alter table redeem_codes enable row level security;
-- 미사용 코드는 REST로 전혀 조회/수정 불가, 아래 함수로만 접근 가능.
-- (PATCH+RLS로 직접 하려 하면 "업데이트 전 행"도 SELECT 정책을 통과해야 매칭되는 탓에
--  "안 쓴 코드는 비공개" 요구사항과 구조적으로 충돌한다 — security definer 함수로 우회)

create or replace function redeem_code(p_code text, p_name text default '익명')
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  rows_affected int;
begin
  update redeem_codes
    set redeemed_at = now(),
        name = coalesce(nullif(trim(p_name), ''), '익명')
    where code = p_code and redeemed_at is null;

  get diagnostics rows_affected = row_count;
  return rows_affected > 0;
end;
$$;

grant execute on function redeem_code(text, text) to anon;

-- 이미 소모된(redeemed) 코드의 이름/시각만 공개 — 미사용 코드는 여전히 비공개 (창립 후원자 명단용)
create policy "founders wall is public" on redeem_codes
  for select using (redeemed_at is not null);

-- 와디즈 펀딩 리워드로 나눠줄 코드 예시 (직접 생성해서 추가하면 됨)
insert into redeem_codes (code) values
  ('KEYCAP-EARLY-0001'),
  ('KEYCAP-EARLY-0002')
on conflict (code) do nothing;
