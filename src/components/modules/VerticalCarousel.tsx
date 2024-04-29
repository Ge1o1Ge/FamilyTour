import { useState } from 'react';
import { transferTarifOptions } from '../../constants';
import { arrowDown, arrowUp } from '../../assets';

const VerticalCarousel = () => {
  const [menuItems, setMenuItems] = useState(transferTarifOptions);
  const [selectedItem, setSelectedItem] = useState<number>(3);

  const handleItemClick = (itemId: number) => {
    const updatedMenuItems = [...menuItems];
    const distance = selectedItem - itemId;

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

    setSelectedItem(itemId);
    setMenuItems(updatedMenuItems);

    setTimeout(() => {
      const resetVisibilityMenuItems = updatedMenuItems.map((item) => {
        const updatedItem = { ...item };
        updatedItem.invisible = false;
        return updatedItem;
      });
      setMenuItems(resetVisibilityMenuItems);
    }, 500);
  };

  return (
    <div className="carousel-container">
      <span className="carousel__vertical__line">
        <button
          onClick={(ev) => {
            ev.preventDefault();
            handleItemClick((selectedItem + 4) % 5 || 5);
          }}
          className="carousel__vertical__button carousel__vertical__button__up"
        >
          <img
            className="carousel__vertical__button__img"
            src={arrowUp}
            alt="предыдущий тариф"
          />
        </button>
        <span className="carousel__vertical__dote" style={{top: (selectedItem - 1) * 75}}></span>
        <span className="carousel__vertical__selector-line"></span>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            handleItemClick((selectedItem + 1) % 5 || 5);
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
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`carousel-item ${selectedItem === item.id ? 'active' : ''} order__${item.order} ${item.invisible ? 'carousel__item_hidden' : ''}`}
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
