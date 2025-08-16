import axios from 'axios';

const API = 'https://www.thesportsdb.com/api/v1/json/3';
const TTL = 1000 * 60 * 60 * 12; // 12 hours of cache

function getCache(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
        const { t, v } = JSON.parse(raw);
        if (Date.now() - t > TTL) return null;
        return v;
    } catch { return null; }
}

function setCache(key, v) {
    localStorage.setItem(key, JSON.stringify({ t: Date.now(), v }));
}

export async function fetchAllLeagues() {
    const key = 'cache:all_leagues';
    const cached = getCache(key);
    if (cached) return cached;
    const { data } = await axios.get(`${API}/all_leagues.php`); // :contentReference[oaicite:3]{index=3}
    setCache(key, data);
    return data;
}

export async function fetchBadgeByLeagueId(id) {
    const key = `cache:badge:${id}`;
    const cached = getCache(key);
    if (cached) return cached;
    const { data } = await axios.get(`${API}/search_all_seasons.php?badge=1&id=${id}`); // :contentReference[oaicite:4]{index=4}
    setCache(key, data);
    return data;
}
