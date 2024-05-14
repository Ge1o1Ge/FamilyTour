import { createDomain } from 'effector';

const popupContentDomain = createDomain();

export const setPopupContent = popupContentDomain.createEvent<React.ReactNode>();

export const $popupContent = popupContentDomain
  .createStore<React.ReactNode | null>(null)
  .on(setPopupContent, (_, popupContent) => popupContent);