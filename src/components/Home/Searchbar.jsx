import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToHistory } from "../../util/localStorage";
import { MdSearch, MdKeyboard, MdKeyboardHide } from "react-icons/md";
import "react-simple-keyboard/build/css/index.css";
import BalochiInput from "./BalochiInput";
const Keyboard = lazy(() => import("react-simple-keyboard"));

const Searchbar = () => {
  const [word, setWord] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const navigate = useNavigate();
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (word.trim() !== "") {
        setIsLoading(true);
        await window.api
          .suggestion(word)
          .then((filteredWords) => {
            setAutocompleteOptions(filteredWords);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      } else {
        setAutocompleteOptions([]);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [word]);

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") handleShift();

    if (button === "{enter}") go();
  };

  const onChangeInput = (input) => {
    setWord(input);
    keyboard.current?.setInput(input);
  };

  const go = () => {
    if (isNotEmpty()) {
      addToHistory(word);
      navigate(`/search/${word}`);
    }
  };

  function isNotEmpty() {
    return (
      word !== undefined && word !== null && word !== "" && word.trim() !== ""
    );
  }

  function onFormSubmit(e) {
    e.preventDefault();
    go();
  }

  return (
    <div className="w-full lg:w-1/2 items-center justify-center content-center relative">
      <form
        onSubmit={onFormSubmit}
        className="flex justify-center text-gray-900 rounded-full shadow-md border p-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <button
          type="button"
          className="hidden sm:block text-blue-500 dark:text-gray-200 p-2 rounded-full ring-gray-400 hover:ring-1 focus:outline-none active:ring-gray-400 hover:shadow-md"
          onClick={() => {
            setShowKeyboard(!showKeyboard);
          }}
          aria-label={showKeyboard ? "Hide Keyboard" : "Show Keyboard"}
        >
          {showKeyboard ? (
            <MdKeyboardHide className="w-8 h-8" />
          ) : (
            <MdKeyboard className="w-8 h-8" />
          )}
        </button>
        <BalochiInput
          ariaLabel="search input field"
          onChange={onChangeInput}
          value={word}
          setInputValue={setWord}
          placeholder="لبز ءِ درگیجگ ءَ ادا نبشتہ بہ کن اِت"
          type="text"
          className="text-xl leading-[3rem] ps-5 sm:ps-2 text-gray-900 flex-grow focus:outline-none w-full rounded-full dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
        />

        <button
          type="submit"
          aria-label="search button"
          className="text-blue-500 dark:text-gray-200 p-2 rounded-full ring-gray-400 hover:ring-1 focus:outline-none active:ring-gray-400 hover:shadow-md"
        >
          <MdSearch className="w-8 h-8" />
        </button>
      </form>

      {isLoading && (
        <div className="flex justify-center mt-2">
          <div
            className="loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-6 w-6"
            role="status"
            aria-live="polite"
          ></div>
        </div>
      )}

      {autocompleteOptions.length > 0 && !isLoading && (
        <ul
          className={`absolute text-xl bg-white dark:bg-dark dark:text-white divide-y border border-gray-300 dark:border-gray-500 divide-gray-200 dark:divide-gray-500 rounded-md shadow-lg z-10 w-full ${
            showKeyboard ? "top-[19rem]" : "top-16"
          }`}
        >
          {autocompleteOptions.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <Link to={`/word/${option.id}`} className="flex w-full">
                {option.full_word_with_symbols}
              </Link>
            </li>
          ))}
          <li
            key={"viewAll"}
            className="px-4 py-2 cursor-pointer bg-gray-100 dark:bg-gray-700 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <Link
              to={`/search/${word}`}
              className="flex w-full text-center items-center justify-center"
            >
              دْرستیں
            </Link>
          </li>
        </ul>
      )}
      {showKeyboard && (
        <div dir="ltr" className="absolute w-full top-16 z-10">
          <Suspense fallback={<div>Loading keyboard...</div>}>
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              layoutName={layout}
              theme={"hg-theme-default dark:text-gray-700 dark:bg-gray-700 p-2"}
              onChange={onChangeInput}
              onKeyPress={onKeyPress}
              layout={{
                default: [
                  "\u064B \u0661 \u0662 \u0663 \u06F4 \u06F5 \u06f6 \u06f7 \u06f8 \u06f9 \u06f0 - = {bksp}",
                  "{tab} \u0642 \u0648 \u0639 \u0631 \u062A \u06D2 \u0621 \u06CC \u06C1 \u067E [ ] \\",
                  "{lock} \u0627 \u0633 \u062F \u0641 \u06AF \u06BE \u062C \u06A9 \u0644 \u061B \u06C2 {enter}",
                  "{shift} \u0632 \u0634 \u0686 \u0637 \u0628 \u0646 \u0645 \u060C \u06D4 \u0652 {shift}",
                  "{space}",
                ],
                shift: [
                  "~ ! @ # $ \u066A } { * ( ) _ \u0651 + {bksp}",
                  "{tab} \u0621\u064F \u0624 \u0621\u0650 \u0691 \u0679 \u0626\u06D2 \u0670 \u0626 \u0652 \u064F \u201C \u201D",
                  "{lock} \u0622 \u0635 \u0688 \u0621\u064E \u063A \u062D \u0636 \u062E \u0626\u0650\u06D2 : \u2018 {enter}",
                  "{shift} \u0630 \u0698 \u062B \u0638 \u06CC\u0654 \u06BA \u0627\u064E\u0646\u062A \u0650 \u064E \u061F {shift}",
                  "{space}",
                ],
              }}
            />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Searchbar;