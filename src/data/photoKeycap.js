const KEY = 'keycap-photo-arts';

function readAll() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function writeAll(list) {
  localStorage.setItem(KEY, JSON.stringify(list));
  return list;
}

export function getPhotoKeycaps() {
  return readAll();
}

export function addPhotoKeycap(dataUrl) {
  const entry = { id: `p${Date.now()}${Math.random().toString(36).slice(2, 7)}`, dataUrl };
  writeAll([...readAll(), entry]);
  return entry;
}

export function removePhotoKeycap(id) {
  return writeAll(readAll().filter((p) => p.id !== id));
}
