// components/CarCard.tsx
import React from 'react';
import { CardInterface } from '../../../types';
import styles from './CarCard.module.scss';

interface CarCardProps {
  car: CardInterface;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <div className={styles.carCard}>
      <h3>{car.name}</h3>
      <p>{car.description.info}</p>
			<div className={styles.carCardContainer}>
				<img src={car.img[0]} alt={car.name} />
			</div>
    </div>
  );
};

export default CarCard;