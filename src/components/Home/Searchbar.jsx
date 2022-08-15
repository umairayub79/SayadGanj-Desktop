import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
const Searchbar = () => {
    const [word, setWord] = useState();
    const navigate = useNavigate()

    function isNotEmpty() {
        return word !== undefined && word !== null && word !== "" && word !== " "
    }

    function onFormSubmit(e) {
        e.preventDefault()
        if (isNotEmpty()) {
            navigate(`/search/${word}`)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={onFormSubmit} className='flex w-screen m-5 hover:shadow-lg focus-within:shadow-lg max-w-lg rounded-full border px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
                <input
                    onChange={({ target: { value } }) => setWord(value)}
                    value={word}
                    placeholder="لبزءِدرگیجگ ءَ اداں نبشتہ بہ کن اِت"
                    type="text"
                    className="text-[24px] text-blue-700 leading-8 font-normal flex-grow focus:outline-none" />

                <button type="submit" className="btn text-blue-500">
                    <SearchIcon className='w-8 h-8' />
                </button>
            </form>
        </div>
    )
}

export default Searchbar