import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Definition from './components/Definition/Definition';
import { WordData } from './types';



function App() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState<WordData[]>([]);
  const [category, setCategory] = useState('en');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${
          word ? word : 'nothing'
        }`
      );
      setMeaning(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{ height: '100vh', backgroundColor: '#282c34', color: '#fff' }}
    >
      <Container
        maxWidth="lg"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />

        <Definition word={word} meaning={meaning} category={category} />
      </Container>
    </div>
  );
}

export default App;
