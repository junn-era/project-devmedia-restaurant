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

        <button className={buttonClicked === 'Entradas' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Entradas')}>
          <Image className={styles.icon} src={icon1} alt='Ícone' />Entradas
        </button>

        <button className={buttonClicked === 'Massas' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Massas')}>
          <Image className={styles.icon} src={icon2} alt='Ícone' />Massas
        </button>

        <button className={buttonClicked === 'Carnes' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Carnes')}>
          <Image className={styles.icon} src={icon3} alt='Ícone' />Carnes
        </button>

        <button className={buttonClicked === 'Bebidas' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Bebidas')}>
          <Image className={styles.icon} src={icon4} alt='Ícone' />Bebidas
        </button>

        <button className={buttonClicked === 'Saladas' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Saladas')}>
          <Image className={styles.icon} src={icon5} alt='Ícone' />Saladas
        </button>

        <button className={buttonClicked === 'Sobremesas' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Sobremesas')}>
          <Image className={styles.icon} src={icon6} alt='Ícone' />Sobremesas
        </button>
      </div>
    </section>
  );
};

export default Categories;