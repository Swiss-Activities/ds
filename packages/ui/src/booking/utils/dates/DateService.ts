export class DateService {
  static weekDays: Record<number, string> = {
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY",
    0: "SUNDAY",
  };

  static formatDate(date: Date) {
    return date.toLocaleDateString("en-GB").split("/").reverse().join("-");
  }

  static formatWeekday(date: Date, format: string) {
    return this.weekDays[new Date(date).getDay()].slice(0, format.length);
  }
}
