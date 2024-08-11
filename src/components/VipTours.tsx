// components/VipTours.tsx
import React, { useState } from 'react';
import { vipToursCardsInfo } from '../constants';
import { SectionWrapper } from '../hoc';
import BookingForm from './modules/BookingForm';
import CarCard from './modules/CarCard';
import styles from './VipTours.module.scss';

const VipTours: React.FC = () => {
  const [selectedCarId, setSelectedCarId] = useState<string>(
    `${vipToursCardsInfo[0].id}`
  );

  const handleCarSelect = (carId: string) => {
    setSelectedCarId(carId);
  };

  const selectedCar = vipToursCardsInfo.find(
    (car) => `${car.id}` === selectedCarId
  );

  return (
    <div className={`${styles.vipTours} container`}>
      <div className={styles.vipToursDescription}>
        <h2 className={styles.vipToursTitle}>VIP Туры
					<span className={styles.vipToursSubTitle}>индивидуальные экскурсии</span>
				</h2>
        <p className={styles.vipToursText}>
          У нас Вы можете забронировать индивидуальный тур в любом направлении и
          маршруту, экскурсия, которая будет проходить без спешки. Любое
          направление: Обзорная по Сочи, Красная Поляна и конечно же Абхазия. Мы
          покажем все красоты нашей природы на курорте, а опытные водители гиды
          профессионально расскажут о истории и интересных фактах о каждом
          объекте. У нас всегда чистые авто, аккуратное вождение, для самых
          маленьких детское кресло. Заполните нашу форму бронирования, наш
          менеджер свяжется с вами и разработает маршрут для вашей компании по
          вашим предпочтениям.
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
