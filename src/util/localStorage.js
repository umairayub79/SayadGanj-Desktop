const searchHistoryKey = "searchHistory"
const favoritesKey = "favorites"
const currentFontKey = "currentFont"

export const getHistory = () => {
    return JSON.parse(localStorage.getItem(searchHistoryKey)) || []
}

export const addToHistory = (query) => {
    const history = getHistory()
    if (!history.find(e => e.query === query)) {
        const id = history.length + 1
        history.push({ id, query })
        localStorage.setItem(searchHistoryKey, JSON.stringify(history))
    }
}

export const deleteHistory = () => {
    localStorage.setItem(searchHistoryKey, JSON.stringify([]))
}

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem(favoritesKey)) || []
}

export const isInFavorites = (id) => {
    return getFavorites().some((e) => e.id === parseInt(id))
}

export const addToFavorites = (word) => {
    const favorites = getFavorites()
    if (!favorites.find(e => e === word)) {
        favorites.push(word)
        localStorage.setItem(favoritesKey, JSON.stringify(favorites))
    }
}

export const deleteFavorite = (id) => {
    const favorites = getFavorites()
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id === parseInt(id)) {
            favorites.splice(i, 1);
            break;
        }
    }
    localStorage.setItem(favoritesKey, JSON.stringify(favorites))
}

export const deleteFavorites = () => {
    localStorage.setItem(favoritesKey, JSON.stringify([]))
}

export const setCurrentFont = (font) => {
    localStorage.setItem(currentFontKey, font)
}

export const getCurrentFont = () => {
    return localStorage.getItem(currentFontKey) | 1
}