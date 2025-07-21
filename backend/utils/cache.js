const cache = {};

export function getFromCache(key) {
  const item = cache[key];
  if (!item) return null;
  if (Date.now() - item.timestamp < 5 * 60 * 1000) {
    return item.data;
  }
  return null;
}

export function setToCache(key, data) {
  cache[key] = {
    data,
    timestamp: Date.now()
  };
}
