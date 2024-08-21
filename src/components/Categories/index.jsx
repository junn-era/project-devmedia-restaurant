import styles from './Categories.module.css';

import Image from 'next/image';


import icon1 from '../../../public/assets/entrada.png';
// import icon2 from '../../../public/assets/img/massa.png';
// import icon3 from '../../../public/assets/img/carne.png';
// import icon4 from '../../../public/assets/img/bebidas.png';
// import icon5 from '../../../public/assets/img/salada.png';
// import icon6 from '../../../public/assets/img/sobremesa.png';

const Categories = ({ handleFilter, buttonClicked }) => {
  return (
    <section className={styles.section_categories}>
      <div>
        <button className={buttonClicked === 'Entries' ? styles.turnOnBtn : styles.turnOffBtn}
          onClick={() => handleFilter('Entries')}>
          <Image className={styles.icon} src={icon1} alt='Ícone' />Entradas
        </button>
      </div>
    </section>
  );
};

export default Categories;