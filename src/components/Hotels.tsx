// components/HotelSection.tsx
import React, { useState } from 'react';
import { hotelsCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import HotelBookingForm from './modules/HotelBookingForm';

import styles from './HotelSection.module.scss';
import DestinationCard from './modules/DestinationCard';

const Hotels: React.FC = () => {
  const [selectedDestinationId, setSelectedDestinationId] = useState<string>(
    `${hotelsCardsInfo[0].id}`
  );

  const handleDestinationSelect = (destinationId: string) => {
    setSelectedDestinationId(destinationId);
  };

  const selectedDestination = hotelsCardsInfo.find(
    (destination) => `${destination.id}` === selectedDestinationId
  );

  return (
    <div className={`${styles.hotelSection} container`}>
      <div className={styles.hotelDescription}>
        <h2 className={styles.hotelTitle}>Бронирование отелей</h2>
        <p className={styles.hotelText}>
          У нас Вы можете забронировать любой отель на Черноморском побережье,
          наши опытные менеджеры подберут для Вас тур вашей мечты. Мы учтем все
          пожелания и предложим варианты размещения для всей вашей семьи. Наша
          компания знает все нюансы по каждому отелю, так как наш офис находится
          в городе Сочи и наши менеджеры были в каждом отеле лично и смогут
          проконсультировать вас зная все изнутри. Заполните форму для брони, и
          мы свяжемся с вами!
        </p>
        <p className={`${styles.hotelText} ${styles.hotelTags}`}>
          #Отели #Курорты #ОтдыхМечты
        </p>
      </div>
      <div className={styles.hotelBox}>
        {selectedDestination && (
          <DestinationCard destination={selectedDestination} />
        )}
        <HotelBookingForm onDestinationSelect={handleDestinationSelect} />
      </div>
    </div>
  );
};

const HotelSectionWrapped = SectionWrapper(Hotels, 'hotelSection', false);
export default HotelSectionWrapped;
