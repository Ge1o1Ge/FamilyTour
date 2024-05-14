import { createDomain } from 'effector'

const modals = createDomain()

export const openMenu = modals.createEvent()
export const closeMenu = modals.createEvent()
export const openCatalogMenu = modals.createEvent()
export const closeCatalogMenu = modals.createEvent()
export const openOrderModal = modals.createEvent()
export const closeOrderModal = modals.createEvent()
export const openQickViewModal = modals.createEvent()
export const closeQickViewModal = modals.createEvent()

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false)

export const $catalogIsOpen = modals
  .createStore(false)
  .on(openCatalogMenu, () => true)
  .on(closeCatalogMenu, () => false)

export const $OrderModal = modals
  .createStore(false)
  .on(openOrderModal, () => true)
  .on(closeOrderModal, () => false)

export const $QickViewModal = modals
  .createStore(false)
  .on(openQickViewModal, () => true)
  .on(closeQickViewModal, () => false)
