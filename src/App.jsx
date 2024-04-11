import React, { useState } from 'react';
import './App.css';

const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setDark] = useState(true);
  const themeName = dark ? "dark" : "light";
  const [currentList, setCurrentList] = useState([]);

  const delayFunction = () => {
    console.log("Delay Function Ran");
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  };

  const testFunction = () => [value * 3, value * 4];

  const handleThemeChange = () => {
    setDark(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleShowList = () => {
    setCurrentList(testFunction());
  };

  return (
    <div className={`page ${themeName}`}>
      <button onClick={handleThemeChange}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleShowList}>Show List</button>
      <h2>{delayFunction()}</h2>
      <div>
        {currentList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
