export interface CardInterface {
  id: number;
  name: string;
  order: string;
  description: string;
  img: string[];
  isHit: boolean;
  isNew: boolean;
  startPrice: string;
}

export interface TransfersInterface {
  id: number;
  name: string;
  description: string;
  carImg: string;
  startPrice: string;
  order: number;
  invisible: boolean;
}

export interface AddressInputProps {
  id: string;
}

export interface ReviewesInfoI {
  id: number;
  name: string;
  title: string;
  description: string;
  timeTag: string;
  stars: number;
}
