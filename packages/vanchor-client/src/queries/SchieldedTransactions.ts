import { executeQuery, getSdk } from "../../utils"

export const GetTotalValueLocked = async (): Promise<number> => {
    const data = (await executeQuery(getSdk().ShieldedTransactionValues)).map((result) => {
        return result.shieldedTransactions;
    }).flat().reduce((acc, val) => {
        return acc + parseInt(val.value);
    }, 0);

    return data;
}