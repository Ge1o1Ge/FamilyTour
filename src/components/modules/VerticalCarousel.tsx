import { useState } from 'react';

const VerticalCarousel = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Item 1', order: 1 },
    { id: 2, name: 'Item 2', order: 2 },
    { id: 3, name: 'Item 3', order: 3 },
    { id: 4, name: 'Item 4', order: 4 },
    { id: 5, name: 'Item 5', order: 5 },
  ]);
  const [selectedItem, setSelectedItem] = useState<number>(3);

  const handleItemClick = (itemId: number) => {
    const updatedMenuItems = [...menuItems];
    const distance = selectedItem - itemId;

    updatedMenuItems.forEach((item) => {
      item.order = (item.order + distance + 5) % 5 || 5;
    });

    setSelectedItem(itemId);
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="carousel-container">
      <ul className="carousel-menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`carousel-item ${selectedItem === item.id ? 'active' : ''} order__${item.order}`}
            onClick={() => handleItemClick(item.id)}
            style={{ top: item.order * 50 }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalCarousel;
