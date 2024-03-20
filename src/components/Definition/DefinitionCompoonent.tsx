import { WordData } from '../../types';
import './DefinitionComponent.css';

function DefinitionComponent({
  word,
  meaning,
  mode,
}: {
  word: string;
  meaning: WordData[];
  mode: boolean;
}) {
  console.log(meaning);
  return (
    <div className="meanings">
      {meaning[0] && word && (
        <div>
          <audio
            src={meaning[0].phonetics[0]?.audio}
            controls
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              width: '100%',
            }}
          >
            Your Browser does not support audio element.
          </audio>
        </div>
      )}

      {word === '' ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: mode ? '#3b5360' : 'white',
                  color: mode ? 'white' : 'black',
                }}
              >
                <em>
                  {item.partOfSpeech} --- {mean.phonetic}
                </em>{' '}
                <b> {def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms :</b>{' '}
                    {def.synonyms.map((s, index) => (
                      <em key={index}>
                        {s}
                        {index < def.synonyms.length - 1 ? ', ' : ''}
                      </em>
                    ))}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
}

export default DefinitionComponent;
