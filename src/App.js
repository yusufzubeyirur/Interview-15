import React, { useState, useEffect } from "react";

function App() {
  return <WordByWord />;
}

const WordByWord = () => {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setWordIndex(0);
    setSubmittedText("");
    setWords(e.target.value.split(" "));
  };

  useEffect(() => {
    if (wordIndex < words.length) {
      const interval = setInterval(() => {
        setSubmittedText((prevT) => prevT + " " + words[wordIndex]);
        setWordIndex((prevI) => prevI + 1);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [wordIndex, words]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Mesaj Giriniz"
        value={inputText}
        style={{ border: "2px solid black" }}
        onChange={handleInputChange}
      />
      <div>{submittedText}</div>
    </div>
  );
};

export default App;
