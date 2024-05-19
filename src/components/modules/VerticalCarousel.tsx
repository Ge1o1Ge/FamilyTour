import { useEffect } from 'react';
import { arrowDown, arrowUp } from '../../assets';
import { useTransfersInfo, useTransfersSelectedItem } from '../../assets/hooks/useTransfersInfo';
import { setSelectedItemTransfers, setTranfersInfo } from '../../context/transfersInfo';

const VerticalCarousel = () => {
  const { tranfersInfo } = useTransfersInfo();
  const { transfersSelectedItem } = useTransfersSelectedItem();

  const handleItemClick = (itemId: number) => {
    const updatedMenuItems = [...tranfersInfo];
    const distance = transfersSelectedItem - itemId;

    updatedMenuItems.forEach((item) => {
      if (
        (item.order <= 2 && ((item.order + distance + 5) % 5 || 5) === 5) ||
        (item.order >= 4 && ((item.order + distance + 5) % 5 || 5) === 1) ||
        (item.order === 1 && ((item.order + distance + 5) % 5 || 5) === 4) ||
        (item.order === 5 && ((item.order + distance + 5) % 5 || 5) === 2)
      ) {
        item.invisible = true;
      }
      item.order = (item.order + distance + 5) % 5 || 5;
    });

    setSelectedItemTransfers(itemId);
    setTranfersInfo(updatedMenuItems);

    setTimeout(() => {
      const resetVisibilityMenuItems = updatedMenuItems.map((item) => {
        const updatedItem = { ...item };
        updatedItem.invisible = false;
        return updatedItem;
      });
      setTranfersInfo(resetVisibilityMenuItems);
    }, 500);
  };

  useEffect(() => {
    const resetVisibilityMenuItems = tranfersInfo.map((item) => {
      const updatedItem = { ...item };
      updatedItem.invisible = false;
      return updatedItem;
    });
    setTranfersInfo(resetVisibilityMenuItems);
  }, [setTranfersInfo]);

  return (
    <div className="carousel-container">
      <span className="carousel__vertical__line">
        <button
          onClick={(ev) => {
            ev.preventDefault();
            handleItemClick((transfersSelectedItem + 4) % 5 || 5);
          }}
          className="carousel__vertical__button carousel__vertical__button__up"
        >
          <img
            className="carousel__vertical__button__img"
            src={arrowUp}
            alt="предыдущий тариф"
          />
        </button>
        <span
          className="carousel__vertical__dote"
          style={{ top: (transfersSelectedItem - 1) * 75 }}
        ></span>
        <span className="carousel__vertical__selector-line"></span>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            handleItemClick((transfersSelectedItem + 1) % 5 || 5);
          }}
          className="carousel__vertical__button carousel__vertical__button__down"
        >
          <img
            className="carousel__vertical__button__img"
            src={arrowDown}
            alt="следующий тариф"
          />
        </button>
      </span>
      <ul className="carousel-menu">
        {tranfersInfo.map((item) => (
          <li
            key={item.id}
            className={`carousel-item ${transfersSelectedItem === item.id ? 'active' : ''} order__${item.order} ${item.invisible ? 'carousel__item_hidden' : ''}`}
            onClick={() => handleItemClick(item.id)}
            style={{ top: (item.order - 1) * 75 }}
          >
            <p>{item.name}</p>
            {item.description && <span>{item.description}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalCarousel;
