export class DateUtil {
  public static fromEpochToDate(utcSeconds: number): Date {
    const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return d;
  }

  public static fromDateToEpoch(date: Date): number {
    return date.getTime() / 1000;
  }
}
