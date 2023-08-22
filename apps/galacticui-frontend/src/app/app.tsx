
import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import styles from './app.module.scss';
import Character from './character.interface';
import CharacterCard from './CharacterCard';



export function App() {
const [characters, setCharacters] = useState<Character[]>([]);

  async function search(search: string) {
    if (search.length < 3) {
      return [];
    } else {
      const response = await fetch(`http://localhost:3000/api/star-wars/search/${search}`);
      const body = await response.json();
      console.log(body);
      return body;
    }
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCharacters(await search(e.target.value));
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={styles['body']}>
      <div className={styles['center']}>
        <h1 className={styles['title']}>Galactic UI</h1>
        <div className={styles['search-container']}>
          <input
            className={styles['search-input']}
            type="search"
            placeholder="Search for a character..."
            onChange={debouncedResults}
          />
        </div>
      </div>
      <ul className={styles['character-grid']}>
        {characters.length === 0 ? (
          <p className={styles['no-data-message']}>
            <span>Nothing to show, try searching...</span>
          </p>
        ) : (
          <ul className={styles['character-grid']}>
            {characters.map((character, index) => (
              <CharacterCard key={index} character={character} />
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
}

export default App;
