import { WordData, Definition } from '../../types';
import './Definition.css';

function Definition({
  word,
  meaning,
  category,
}: {
  word: string;
  meaning: WordData[];
  category: string;
}) {
  console.log(meaning);
  return (
    <div className="meanings">
      {word ? (
        <div></div>
      ) : (
        <span className="subTitle">Start by typing a word in Search </span>
      )}
    </div>
  );
}

export default Definition;
