// components/VipTours.tsx
import React, { useState } from 'react';
import { vipToursCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import BookingForm from './modules/BookingForm';
import CarCard from './modules/CarCard';
import styles from './VipTours.module.scss';

const VipTours: React.FC = () => {
  const [selectedCarId, setSelectedCarId] = useState<string>(`${vipToursCardsInfo[0].id}`);

  const handleCarSelect = (carId: string) => {
    setSelectedCarId(carId);
  };

  const selectedCar = vipToursCardsInfo.find(car => `${car.id}` === selectedCarId);

  return (
    <div className={`${styles.vipTours} container`}>
      <div className={styles.vipToursDescription}>
        <h2 className={styles.vipToursTitle}>VIP Туры</h2>
        <p className={styles.vipToursText}>
          Исследуйте Черное море с элегантными VIP турами! Откройте для себя
          роскошь побережья в уединении, наслаждаясь приватными экскурсиями и
          особым вниманием к вашему комфорту. Роскошные отели, эксклюзивные
          мероприятия, идеальное обслуживание – все для вашего незабываемого
          отдыха!
        </p>
        <p className={`${styles.vipToursText} ${styles.vipToursTags}`}>
          #VIPтуры #Черное_Море
        </p>
      </div>
      <div className={styles.vipToursBox}>
        <BookingForm onCarSelect={handleCarSelect} />
        {selectedCar && <CarCard car={selectedCar} />}
      </div>
    </div>
  );
};

const VipToursWrapped = SectionWrapper(VipTours, 'vipTours', false);
export default VipToursWrapped;
