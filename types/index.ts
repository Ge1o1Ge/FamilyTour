export interface CardInterface {
  id: number;
  name: string;
  semiName?:string;
  order: string;
  description: {
    info: string;
    marshrut: string[];
    dopUslugi: string[];
    time: string;
  };
  img: string[];
  isHit: boolean;
  isNew: boolean;
  startPrice: string | JSX.Element;
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
  name: string;
}

export interface ReviewesInfoI {
  id: number;
  name: string;
  title: string;
  description: string;
  timeTag: string;
  stars: number;
}

export interface IWrappedComponentProps {
  open: boolean
  setOpen: (open: boolean) => void
}

