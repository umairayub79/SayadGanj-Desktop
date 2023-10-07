import React, { useState, useEffect } from "react";

const BalochiInput = ({
  ariaLabel,
  className,
  onChange,
  value,
  setInputValue,
  placeholder,
}) => {
  const [isShiftMode, setIsShiftMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "Shift" ||
        (e.getModifierState && e.getModifierState("CapsLock"))
      ) {
        setIsShiftMode(true);
      }
    };

    const handleKeyUp = (e) => {
      if (
        e.key === "Shift" ||
        (e.getModifierState && e.getModifierState("CapsLock"))
      ) {
        setIsShiftMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const convertToBalochi = (englishText) => {
    const lowerCaseMap = {
      q: "ق",
      w: "و",
      e: "ع",
      r: "ر",
      t: "ت",
      y: "ے",
      u: "ء",
      i: "ی",
      o: "ہ",
      p: "پ",
      a: "ا",
      s: "س",
      d: "د",
      f: "ف",
      g: "گ",
      h: "ھ",
      j: "ج",
      k: "ک",
      l: "ل",
      ";": "؛",
      "'": "ۂ",
      z: "ز",
      x: "ش",
      c: "چ",
      v: "ط",
      b: "ب",
      n: "ن",
      m: "م",
      ",": "،",
      ".": "۔",
      "/": "ْ",
    };

    const upperCaseMap = {
      Q: "ءُ",
      W: "ؤ",
      E: "ءِ",
      R: "ڑ",
      T: "ٹ",
      Y: "ئے",
      U: "ٰ",
      I: "ئ",
      O: "ْ",
      P: "ُ",
      "{": "“",
      "}": "”",

      A: "آ",
      S: "ص",
      D: "ڈ",
      F: "ءَ",
      G: "غ",
      H: "ح",
      J: "ض",
      K: "خ",
      L: "ئِے",
      ";": ":",
      "'": "‘",
      Z: "ذ",
      X: "ژ",
      C: "ث",
      V: "ظ",
      B: "یٔ",
      N: "ں",
      M: "اَنت",
      '"': "‘",
      ";": isShiftMode ? ":" : "؛",
      "<": isShiftMode ? "\u0650" : "<",
      ">": isShiftMode ? "\u064E" : ">",
      "?": isShiftMode ? "\u061F" : "?",
    };

    let balochiText = "";
    for (let i = 0; i < englishText.length; i++) {
      const char = englishText[i];
      if (isShiftMode && upperCaseMap[char]) {
        balochiText += upperCaseMap[char];
      } else if (lowerCaseMap[char]) {
        balochiText += lowerCaseMap[char];
      } else {
        balochiText += char;
      }
    }
    return balochiText;
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    const convertedValue = convertToBalochi(value);
    setInputValue(convertedValue);

    // If an eonChange prop is provided, call it with the converted value
    if (onChange) {
      onChange(convertedValue);
    }
  };

  return (
    <input
      type="text"
      aria-label={ariaLabel}
      className={className}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default BalochiInput;
