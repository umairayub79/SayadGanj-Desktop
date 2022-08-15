import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';
import Home from './components/Home/Home';
import SearchResults from './components/Search/SearchResults';
import WordDetail from './components/WordDetail/WordDetail';


const App = () => (
  <div className='ُh-[800px] overflow:hidden flex flex-col items-center justify-center'>
    <div className='h-[550px] mt-[110px] w-screen overflow-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/word/:id" element={<WordDetail />} />
      </Routes>
    </div>
  </div>
);

export default App;