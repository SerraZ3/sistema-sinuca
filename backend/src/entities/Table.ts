import teamsConfig from "../config/teams";
import { Team } from "./Team";

export interface IShowTableDTO {
  indexTable: number;
}

export interface IInsertTeamInTableDTO {
  indexTeam: number;
  indexTable: number;
}

export interface ICreateTableDTO {
  name: string;
  award: string;
  maxPoint: number;
  descriptionPoint: string;
}

export class Table {
  private name: string;
  private award: string;
  private maxPoint: number;
  private descriptionPoint: string;
  private teams: Team[] = [];
  private teamWinnerIndex: number;
  private isActive: boolean = true;

  constructor(data: ICreateTableDTO) {
    Object.assign(this, data);
  }
  public getName(): string {
    return this.name;
  }
  public getAward(): string {
    return this.award;
  }
  public getMaxPoint(): number {
    return this.maxPoint;
  }
  public getDescriptionPoint(): string {
    return this.descriptionPoint;
  }
  public getTeams(): Team[] {
    return this.teams;
  }
  public insertTeam(team: Team): void {
    this.teams.push(team);
  }
  public findTeamByIndex(index: number): Team | undefined {
    let numberOfTeams: number = this.teams.length;
    if (index > numberOfTeams - 1) return undefined;
    return this.teams[index];
  }
  public insertPointByTeamIndex(index: number, pointValue: number): void {
    this.teams[index].setPoint(pointValue);
  }
  public addTeam(team: Team): boolean {
    if (this.teams.length < teamsConfig.maxTeams) {
      this.teams.push(team);
      return true;
    }
    return false;
  }
  public checkWinner(): Team | undefined {
    const indexWinner = this.teams.findIndex(
      (team) => team.getPoints().sumValues() >= this.maxPoint
    );
    if (indexWinner >= 0) {
      this.teamWinnerIndex = indexWinner;
      this.isActive = false;
      return this.teams[indexWinner];
    }
    return undefined;
  }
  public orderTeamByPoint(): void {
    this.teams.map((team) => team.getPoints().sumValues());
    this.teams.sort((firstElement, secondElement) => {
      if (
        firstElement.getPoints().getTotalValues() <
        secondElement.getPoints().getTotalValues()
      ) {
        return 1;
      }
      if (
        firstElement.getPoints().getTotalValues() >
        secondElement.getPoints().getTotalValues()
      ) {
        return -1;
      }
      return 0;
    });
  }
}
