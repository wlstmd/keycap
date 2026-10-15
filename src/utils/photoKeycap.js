const SIZE = 160;
const INK = [0x1a, 0x17, 0x14];
// ponytail: fixed Sobel threshold — works well for well-lit photos, washes out in low light.
// upgrade path: adaptive threshold (Otsu) if backers complain about dark photos.
const EDGE_THRESHOLD = 70;

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// 사진을 선으로만 이루어진 '손그림' 스타일 키캡 아트로 변환한다.
// 전부 브라우저 Canvas 2D에서 처리 — 서버도, AI API도, 업로드도 없음 (비용 0원, 사진도 기기 밖으로 안 나감).
export async function photoToKeycapArt(file) {
  const img = await loadImage(file);
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext('2d');

  const scale = Math.max(SIZE / img.width, SIZE / img.height);
  const dw = img.width * scale;
  const dh = img.height * scale;
  ctx.drawImage(img, (SIZE - dw) / 2, (SIZE - dh) / 2, dw, dh);
  URL.revokeObjectURL(img.src);

  const { data } = ctx.getImageData(0, 0, SIZE, SIZE);
  const gray = new Float32Array(SIZE * SIZE);
  for (let i = 0; i < gray.length; i++) {
    const o = i * 4;
    gray[i] = 0.299 * data[o] + 0.587 * data[o + 1] + 0.114 * data[o + 2];
  }

  const gx = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
  const gy = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
  const out = ctx.createImageData(SIZE, SIZE);
  for (let y = 1; y < SIZE - 1; y++) {
    for (let x = 1; x < SIZE - 1; x++) {
      let sx = 0;
      let sy = 0;
      let k = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const v = gray[(y + dy) * SIZE + (x + dx)];
          sx += v * gx[k];
          sy += v * gy[k];
          k++;
        }
      }
      const isEdge = Math.sqrt(sx * sx + sy * sy) > EDGE_THRESHOLD;
      const o = (y * SIZE + x) * 4;
      out.data[o] = INK[0];
      out.data[o + 1] = INK[1];
      out.data[o + 2] = INK[2];
      out.data[o + 3] = isEdge ? 255 : 0;
    }
  }

  ctx.putImageData(out, 0, 0);
  return canvas.toDataURL('image/png');
}
