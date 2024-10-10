import toast from 'react-hot-toast'
import styles from './SearchBar.module.css';
import { useState } from 'react';


type SearchBarProps = {
  onSubmit: (query : string) => void
}

export default function SearchBar({ onSubmit }:SearchBarProps) {
  const [input, setInput] = useState<string>('');



  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.trim() === '') {
      return toast.error('Please enter a search term.');
    }
    onSubmit(input.trim());
    setInput('');
  };

  return (
    <header>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          autoComplete="off"
          className={styles.input}
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}