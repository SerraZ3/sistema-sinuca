import { Player } from "./Player";
import { Point } from "./Point";

export class Team {
  private name: string;
  private player1: Player;
  private player2: Player;
  private point: Point;

  constructor(newName: string, newPlayer1: Player, newPlayer2: Player) {
    this.name = newName;
    this.player1 = newPlayer1;
    this.player2 = newPlayer2;
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
