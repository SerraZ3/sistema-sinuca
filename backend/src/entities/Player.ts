export class Player {
  private name: string;
  constructor(newName: string) {
    this.name = newName;
  }
  public getName(): string {
    return this.name;
  }
}
