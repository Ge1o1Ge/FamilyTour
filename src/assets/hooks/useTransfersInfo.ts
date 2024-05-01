import { useUnit } from "effector-react"
import { $selectedItemTransfers, $tranfersInfo } from "../../context/transfersInfo"
import { transferTarifOptions } from "../../constants"

export const useTransfersInfo = () => {
  const tranfersInfo = useUnit($tranfersInfo)
  const transfersVars = transferTarifOptions
  return { tranfersInfo, transfersVars }
}

export const useTransfersSelectedItem = () => {
  const transfersSelectedItem = useUnit($selectedItemTransfers)
  return { transfersSelectedItem }
}
