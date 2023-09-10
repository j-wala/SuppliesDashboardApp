export class SupplyItem {
  constructor(
    public name: string,
    public category: string,
    public bestBeforeDate: Date,
    public photoUrl: string
  ) {}

  getFormattedDate(){
    return `${this.bestBeforeDate.toDateString()}`//, den ${this.bestBeforeDate.getDate()}.${this.bestBeforeDate.getMonth()}.${this.bestBeforeDate.getFullYear()} `
  }
}