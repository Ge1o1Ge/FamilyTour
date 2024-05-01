import { TransfersInterface } from '../../types';
import { transferTarifOptions } from '../constants';
import { createDomain } from 'effector';

const tranfersInfo = createDomain();

export const setTranfersInfo = tranfersInfo.createEvent<TransfersInterface[]>();

export const $tranfersInfo = tranfersInfo
  .createStore(transferTarifOptions)
  .on(setTranfersInfo, (_, tranfersInfo) => tranfersInfo);


const selectedItemTransfers = createDomain();

export const setSelectedItemTransfers =
  selectedItemTransfers.createEvent<number>();

export const $selectedItemTransfers = selectedItemTransfers
  .createStore(3)
  .on(setSelectedItemTransfers, (_, selectedItemTransfers) => selectedItemTransfers);
