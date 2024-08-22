import Image from 'next/image';
import Lupa from '../../../public/assets/lupa.png';
import styles from './SearchField.module.css';

const SearchField = ({ typedSearchText, handleSearch }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.icon} src={Lupa} alt='Ícone de lupa' />
      <input
        type='text'
        value={typedSearchText}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder='Pesquise aqui um dos pratos do nosso cardápio'
      />
    </div>
  );
};

export default SearchField;