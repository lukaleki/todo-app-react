import { useState } from 'react'
import './style.scss'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [valueArray, setValueArray] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      setValueArray(prevArray => [...prevArray, inputValue]);
      setInputValue('');
    }
  };

  return (
    <section>
      <div className="todo">
        <div className="form">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Add to Array</button>
        </div>
          
        
      
        <ul>
          {valueArray.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      
    </section>
  );
}

export default App;
