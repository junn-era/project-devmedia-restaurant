import styles from './Categories.module.css';

import Image from 'next/image';

import icon1 from '../../../public/assets/entrada.png';
import icon2 from '../../../public/assets/massa.png';
import icon3 from '../../../public/assets/carne.png';
import icon4 from '../../../public/assets/bebidas.png';
import icon5 from '../../../public/assets/salada.png';
import icon6 from '../../../public/assets/sobremesa.png';

const Categories = ({ handleFilter, buttonClicked }) => {
  return (
    <section className={styles.section_categories}>
      <div className={styles.container_buttons}>
        <button className={buttonClicked === 'Entries' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Entries')}>
          <Image className={styles.icon} src={icon1} alt='Ícone' />Entradas
        </button>

        <button className={buttonClicked === 'Pasta' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Pasta')}>
          <Image className={styles.icon} src={icon2} alt='Ícone' />Massas
        </button>

        <button className={buttonClicked === 'Meats' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Meats')}>
          <Image className={styles.icon} src={icon3} alt='Ícone' />Carnes
        </button>

        <button className={buttonClicked === 'Drinks' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Drinks')}>
          <Image className={styles.icon} src={icon4} alt='Ícone' />Bebidas
        </button>

        <button className={buttonClicked === 'Salads' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Salads')}>
          <Image className={styles.icon} src={icon5} alt='Ícone' />Saladas
        </button>

        <button className={buttonClicked === 'Desserts' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Desserts')}>
          <Image className={styles.icon} src={icon6} alt='Ícone' />Sobremesas
        </button>
      </div>
    </section>
  );
};

export default Categories;