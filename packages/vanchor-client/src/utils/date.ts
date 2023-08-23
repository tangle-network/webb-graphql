export class DateUtil {
  public static fromEpochToDate(utcSeconds: number): Date {
    const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return d;
  }

  public static fromDateToEpoch(date: Date): number {
    return Math.round(date.getTime() / 1000);
  }
}

export const getEpochArray = (
  start: number,
  numberOfDays: number
): Array<number> => {
  return Array.from({ length: numberOfDays }, (_, idx) => start + idx * 86400);
};
