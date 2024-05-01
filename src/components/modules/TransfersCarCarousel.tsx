import { useTransfersInfo, useTransfersSelectedItem } from '../../assets/hooks/useTransfersInfo';
import { setSelectedItemTransfers, setTranfersInfo } from '../../context/transfersInfo';


const TransfersCarCarousel = () => {
  const { tranfersInfo } = useTransfersInfo();
  const { transfersSelectedItem } = useTransfersSelectedItem();

  const handleItemClick = (itemId: number) => {
    const updatedMenuItems = [...tranfersInfo];
    const distance = transfersSelectedItem - itemId;

    updatedMenuItems.forEach((item) => {
      const itemOrder = (item.order + 1) % 5 || 5;
      if (
        (itemOrder <= 2 && ((itemOrder + distance + 5) % 5 || 5) === 5) ||
        (itemOrder >= 4 && ((itemOrder + distance + 5) % 5 || 5) === 1) ||
        (itemOrder === 1 && ((itemOrder + distance + 5) % 5 || 5) === 4) ||
        (itemOrder === 5 && ((itemOrder + distance + 5) % 5 || 5) === 2)
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

  return (
    <div className="car__carousel-container">
      <ul className="car__carousel-menu">
        {tranfersInfo.map((item) => {
          const itemOrder = (item.order + 1) % 5 || 5
          return (
            <li
              key={item.id}
              className={`car__carousel-item ${transfersSelectedItem === item.id ? 'active' : ''} order__${item.order} ${item.invisible ? 'car__carousel__item_hidden' : ''}`}
              onClick={() => handleItemClick(item.id)}
              style={{
                left: `${itemOrder > 4 ? `${itemOrder * 16.5}` : `${(itemOrder - 1) * 16.5}`}%`,
              }}
            >
              <div className="car__carousel-item__box">
                <p className="car__carousel-item__title">{item.name}</p>
                <span className="car__carousel-item__text">
                  {item.description} {' '}
                </span>
                <img
                  className="car__carousel-item__img"
                  src={item.carImg}
                  alt={`изображение для тарифа ${item.name}`}
                />
                <p className="car__carousel-item__text">{item.startPrice}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransfersCarCarousel;
