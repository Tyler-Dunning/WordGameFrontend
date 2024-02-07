import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; // Import Axios for making HTTP requests

function App() {
  const [field, setField] = useState('');
  const[result, setResult] = useState("")


  const submitAnagrams = async () => {
        setResult("Loading");
        const tempField = field.toLowerCase();
        if(field.length != 6)
        {
          setResult("Incorrect entry, please enter 6 letters")
        }
        else
        {
          const result = await axios.get(`https://test-flask-woad.vercel.app/anagrams?inputs=${tempField}`);
          const val = result.data;

          let res = "";
          for(let i = val.length - 1; i >= 0; i--)
          {
            for(let k = 0; k < val[i].length; k++)
            {
              res += val[i][k] + "\n";
            }
          }

          setField('');
          setResult(res);
      }
  }
  
  const submitWordHunt = async () => {
    setResult("Loading");
    const tempField = field.toLowerCase();
    if(field.length != 16)
    {
      setResult("Incorrect entry, please enter 16 letters")
    }
    else
    {
      const result = await axios.get(`https://test-flask-woad.vercel.app/wordhunt?inputs=${tempField}`);
      const val = result.data;

      let res = "";
      for(let i = val.length - 1; i >= 0; i--)
      {
        for(let k = 0; k < val[i].length; k++)
        {
          res += val[i][k] + "\n";
        }
      }

      setField('');
      setResult(res);

  }
  }

  return (
    <div>
      <h3>Input letters from left to right, top to bottom for Word Hunt <br />
      </h3>
      <input
        type="text"
        placeholder="Enter Letters"
        value={field}
        onChange={e => setField(e.target.value)}
      />
      <br />
      <button onClick={submitAnagrams}>Anagrams</button>
      <button onClick={submitWordHunt}>Word Hunt</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
