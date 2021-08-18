import { Player } from "./Player";
import { Point } from "./Point";
export interface ICreateTeamDTO {
  name: string;
  player1: Player;
  player2: Player;
  point: Point;
}
export class Team {
  private name: string;
  private player1: Player;
  private player2: Player;
  private point: Point;

  constructor(data: ICreateTeamDTO) {
    Object.assign(this, data);
  }

  public getName(): string {
    return this.name;
  }
  public getPlayer1(): Player {
    return this.player1;
  }
  public getPlayer2(): Player {
    return this.player2;
  }
  public getPoints(): Point {
    return this.point;
  }
  public setPoint(newPoint: number): void {
    this.point.setValue(newPoint);
  }
}
