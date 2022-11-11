import React, { useState, useEffect } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Home from './components/Home/Home';
import History from './components/History/History';
import Navigation from './components/Navigation/Navigation';
import SearchResults from './components/Search/SearchResults';
import WordDetail from './components/WordDetail/WordDetail';
import Favorites from './components/Favorites/Favorites';
import { setCurrentFont, getCurrentFont } from './util/localStorage';
import { FontSettingsModal } from './components/Modals/FontSettingsModal';

const App = () => {

  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  const [font, setFont] = useState(getCurrentFont())
  const [isFontSettingsModalOpen, setIsFontSettingsModalOpen] = useState(false)

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

    setCurrentFont(font)
    switch (font) {
      case 0:
        document.body.classList.remove('font-Estedad')
        document.body.classList.remove('font-Vazirmatn')
        document.body.classList.add('font-Amiri')
        break;
      case 1:
        document.body.classList.remove('font-Amiri')
        document.body.classList.remove('font-Vazirmatn')
        document.body.classList.add('font-Estedad')
        break;
      case 2:
        document.body.classList.remove('font-Estedad')
        document.body.classList.remove('font-Amiri')
        document.body.classList.add('font-Vazirmatn')
        break;
      default:
        break;
    }

  }, [isDarkMode, font])


  const handleDarkMode = (isDarkMode) => {
    setIsDarkMode(isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }

  return (
    <div className='ُmin-h-screen relative'>
      <div className='min-h-[calc(100vh-28px)] h-[calc(100vh-28px)] absolute top-0 bottom-0 right-0 border-l border-gray-300 dark:border-gray-700 w-12'>
        <Navigation isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} handleFontSettingsModal={() => setIsFontSettingsModalOpen(true)} />
      </div>
      <div className='h-[calc(100vh-28px)] absolute top-0 bottom-0 left-0 right-12 overflow-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/word/:id" element={<WordDetail />} />
        </Routes>
      </div>
      <FontSettingsModal isOpen={isFontSettingsModalOpen} handleClose={() => setIsFontSettingsModalOpen(false)} font={font} handleFontChange={(ifont) => setFont(parseInt(ifont))} />
    </div>
  )
}

export default App;