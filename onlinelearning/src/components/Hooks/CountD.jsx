import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const countDuplicates = (value) => {
    const charMap = {};
    let duplicates = 0;

    for (let char of value) {
      if (charMap[char]) {
        duplicates++;
      }
      charMap[char] = true;
    }

    return duplicates;
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    const duplicatesCount = countDuplicates(inputValue);
    setCount(duplicatesCount);
  };

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <p>Duplicate characters count: {count}</p>
    </div>
  );
}
