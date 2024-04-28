import React, { useState, ChangeEvent } from 'react';
import { AddressInputProps } from '../../../types';

const AddressInput: React.FC<AddressInputProps> = ({ id }) => {
  const [address, setAddress] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddress(value);

    // Запрос к Nominatim API для получения подсказок по введенному адресу
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=краснодарский край ${value}`
      );
      const data = await response.json();
      const addresses: string[] = data.map((item: any) => item.display_name);
      setSuggestions(addresses);
    } catch (error) {
      console.error('Ошибка при получении подсказок:', error);
    }
  };

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const handleSelectAddress = (selectedAddress: string) => {
    setAddress(selectedAddress);
    setSuggestions([]);
    // Действия при выборе адреса из подсказок, например, обновление карты
  };

  return (
    <div className="transfers__form__input__from__location__box">
      <input
        type="text"
        value={address}
        id={id}
        className="transfers__form__input__from__location"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Введите адрес"
      />
      {suggestions.length > 0 && (
        <ul
          className={`transfers__form__input__from__location__suppose ${isActive ? 'active' : ''}`}
        >
          {suggestions.map((suggestion: string, index: number) => (
            <li key={index} onClick={() => handleSelectAddress(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressInput;
