export interface IAddPointDTO {
  indexTable: number;
  indexTeam: number;
  pointValue: number;
}

export class Player {
  private name: string;
  constructor(newName: string) {
    this.name = newName;
  }
  public getName(): string {
    return this.name;
  }
}
