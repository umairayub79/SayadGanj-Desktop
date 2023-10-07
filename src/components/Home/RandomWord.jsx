import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

export const RandomWord = () => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  async function getRandomWord() {
    setLoading(true);
    setResponse(await window.api.randomWord());
    setLoading(false);
  }
  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <Link to={`/word/${response?.id}`}>
      <div className="dark:text-white rounded-lg shadow-md p-6 mt-16 mx-auto max-w-md border dark:border-gray-700">
        <h2 className="text-2xl dark:text-white font-bold mb-4 text-center">
          پَدیمیں لبز
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col gap-5 item pb-2 text-2xl leading-relaxed">
            <div className="item">
              <h3 className="text-3xl dakr:text-white font-bold">
                {response?.full_word_with_symbols}
              </h3>
              <p className="mask text-xl whitespace-pre-line mt-5">
                {response?.definition}
              </p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};
