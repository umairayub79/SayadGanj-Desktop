import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { HiSearch } from 'react-icons/hi';
import { TbKeyboardShow, TbKeyboardHide } from 'react-icons/tb';
import { addToHistory } from '../../util/localStorage';
import Keyboard from 'react-simple-keyboard'
import "react-simple-keyboard/build/css/index.css";
import cx from 'classnames'

const Searchbar = () => {
    const [word, setWord] = useState();
    const [showKeyboard, setShowKeyboard] = useState(false)
    const navigate = useNavigate()
    const [layout, setLayout] = useState("default");
    const keyboard = useRef();



    const onChange = input => {
        setWord(input);
    };

    const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
    };

    const onKeyPress = button => {
        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();

        if (button === "{enter}") go()
    };

    const onChangeInput = event => {
        const input = event.target.value;
        setWord(input);
        keyboard.current.setInput(input);
    };

    const go = () => {
        if (isNotEmpty()) {
            addToHistory(word)
            navigate(`/search/${word}`)
        }
    }
    function isNotEmpty() {
        return word !== undefined && word !== null && word !== "" && word !== " "
    }


    function onFormSubmit(e) {
        e.preventDefault()
        go()
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={onFormSubmit} className="flex items-center w-[420px] text-gray-900 bg-gray-100 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <button className=" text-blue-500 dark:text-gray-200 p-2 rounded-full ring-gray-400 hover:ring-1 focus:outline-none active:ring-gray-400 hover:shadow-md" onClick={() => { setShowKeyboard(!showKeyboard) }}>
                    {showKeyboard ? <TbKeyboardHide className='w-8 h-8' /> : <TbKeyboardShow className='w-8 h-8' />}
                </button>
                <input
                    onChange={onChangeInput}
                    value={word}
                    placeholder="لبزءِدرگیجگ ءَ ادا نبشتہ بہ کن اِت"
                    type="text"
                    className="text-xl leading-[3rem] p-2 text-gray-900 flex-grow focus:outline-none w-full bg-gray-100 rounded-full  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white" />

                <button type="submit" className="bg-gray-200 dark:bg-gray-500 text-blue-500 dark:text-gray-200 p-2 rounded-full ring-gray-400 hover:ring-1 focus:outline-none active:ring-gray-400 hover:shadow-md">
                    <HiSearch className='w-8 h-8' />
                </button>
            </form>

            <div dir='ltr' className={cx('absolute top-44 z-50', {
                'hidden': !showKeyboard
            })}>
                <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    layoutName={layout}
                    theme={"hg-theme-default dark:text-gray-700 dark:bg-gray-700"}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    layout={{
                        'default': [
                            "\u064B \u0661 \u0662 \u0663 \u06F4 \u06F5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {bksp}",
                            "{tab} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0621 \u0649 \u06C1 \u067E [ ] \\",
                            "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u06C2 {enter}",
                            "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u060C \u06D4 \u0652 {shift}",
                            "{space}",
                        ],
                        'shift': [
                            "~ ! @ # $ \u066A } { * ( ) _ \u0651 + {bksp}",
                            "{tab} \u0621\u064F \u0624 \u0621\u0650 \u0691 \u0679 \u0626\u06D2 \u0670 \u0626 \u0652 \u064F \u201C \u201D",
                            "{lock} \u0622 \u0635 \u0688 \u0621\u064E \u063A \u062D \u0636 \u062E \u0626\u0650\u06D2 : \u2018 {enter}",
                            "{shift} \u0630 \u0698 \u062B \u0638 \u06CC\u0654 \u06BA \u0627\u064E\u0646\u062A \u0650 \u064E \u061F {shift}",
                            "{space}",
                        ]
                    }}
                />
            </div>
        </div>
    )
}

export default Searchbar