export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public price: number = 0,
    public description: string = '',
    public published: Date | string = new Date()
  ) {}
}
