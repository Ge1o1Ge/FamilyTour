// components/modules/DestinationCard.tsx
import React from 'react';
import styles from './DestinationCard.module.scss';

interface DestinationCardProps {
  destination: {
    id: number;
    name: string;
    description: { info: string };
    img: string[];
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className={styles.destinationCard}>
      <h3>{destination.name}</h3>
      <div className={styles.destinationCardContainer}>
        <img src={destination.img[0]} alt={destination.name} />
      </div>
    </div>
  );
};

export default DestinationCard;
