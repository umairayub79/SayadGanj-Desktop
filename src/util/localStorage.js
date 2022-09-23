const searchHistoryKey = "searchHistory"

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