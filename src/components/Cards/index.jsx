import Image from 'next/image';
import styles from './Cards.module.css';

const Cards = ({ product }) => {
  return (
    <div className={styles.container}>

      <figure>
        <Image src={product.image} alt={product.name} />
      </figure>

      <div className={styles.container_info}>
        <div>
          <h3>{product.name}</h3>
          <small>{product.category}</small>
          <p>{product.description}</p>
        </div>

        <div>
          <span>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;