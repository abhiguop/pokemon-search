class CacheService {
  constructor(ttlSeconds = 3600, maxEntries = 100) {
    this.ttl = ttlSeconds * 1000; // Convert to ms
    this.maxEntries = maxEntries;
    this.cache = new Map();
  }

  get(key) {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiry) {
      this.cache.delete(key);
      return null;
    }

    // Refresh LRU order by re-inserting
    this.cache.delete(key);
    this.cache.set(key, entry);
    
    return entry.value;
  }

  set(key, value) {
    if (this.cache.size >= this.maxEntries) {
      // Remove oldest entry (first item in Map)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    const expiry = Date.now() + this.ttl;
    this.cache.set(key, { value, expiry });
  }

  clear() {
    this.cache.clear();
  }
}

module.exports = new CacheService(3600, 50); // Default 1 hour TTL, 50 entries
