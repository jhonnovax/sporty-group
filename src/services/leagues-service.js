import axios from 'axios';

const TTL = 1000 * 60 * 60 * Number(process.env.VUE_API_LEAGUES_CACHE_HOURS || 12);

function getCache(key) {
    const raw = localStorage.getItem(key);

    if (!raw) {
        return null;
    }

    try {
        const { t, value } = JSON.parse(raw);

        if (Date.now() - t > TTL) {
            return null;
        }

        return value;
    } catch { 
        return null; 
    }
}

function setCache(key, v) {
    localStorage.setItem(key, JSON.stringify({ t: Date.now(), v }));
}

export async function fetchAllLeagues() {
    const key = 'cache:all_leagues';
    const cached = getCache(key);

    if (cached) {
        return cached;
    }

    const { data } = await axios.get(`${process.env.VUE_API_LEAGUES_URL}/all_leagues.php`);
    setCache(key, data);

    return data;
}

export async function fetchBadgeByLeagueId(id) {
    const key = `cache:badge:${id}`;
    const cached = getCache(key);

    if (cached) {
        return cached;
    }

    const { data } = await axios.get(`${process.env.VUE_API_LEAGUES_URL}/search_all_seasons.php?badge=1&id=${id}`);
    setCache(key, data);

    return data;
}
