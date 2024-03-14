import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ReactJson from 'react-json-view';

function App() {
  const [meaning, setMeaning] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane'
      );

      setMeaning(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div>
      {meaning ? (
        <ReactJson src={meaning} theme="monokai" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
