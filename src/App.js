import React,{useState, useEffect} from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SearchResults from './components/Search/SearchResults';
import WordDetail from './components/WordDetail/WordDetail';

const App = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
        ? true
        : false
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const handleDarkMode = (isDarkMode) => {
    setIsDarkMode(isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }

  return (
    <div className='ُmin-h-screen relative'>
      <div className='min-h-[calc(100vh-28px)] h-[calc(100vh-28px)] absolute top-0 bottom-0 right-0 border-l dark:border-gray-700 w-12'>
        <Navigation isDarkMode={isDarkMode} handleDarkMode={handleDarkMode}/>
      </div>
      <div className='h-[calc(100vh-28px)] absolute top-0 bottom-0 left-0 right-12  overflow-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/word/:id" element={<WordDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;