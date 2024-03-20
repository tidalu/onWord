import TextField from '@mui/material/TextField';
import './Header.css';
import createTheme from '@mui/material/styles/createTheme';
import { MenuItem, ThemeProvider } from '@mui/material';
import categories from '../../data/category';

function Header({
  category,
  setCategory,
  word,
  setWord,
  mode,
}: {
  category: string;
  setCategory: (w: string) => void;
  word: string;
  setWord: (w: string) => void;
  mode: boolean;
}) {
  const darkTheme = createTheme({
    palette: {
      mode: mode ? 'light' : 'dark',
    },
  });

  function handleChange(language: string) {
    setCategory(language);
    setWord('');
  }

  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a word"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            variant="standard"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
          >
            {categories.map((option) =>
              option.value == 'English' ? (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ) : (
                <MenuItem key={option.label} value={option.label} disabled>
                  {option.value}
                </MenuItem>
              )
            )}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
