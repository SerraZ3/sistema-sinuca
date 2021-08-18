export class Point {
  private value: number[];
  public getCurrentValue(): number {
    let lastValueIndex: number = this.value.length - 1;
    return this.value[lastValueIndex];
  }
  public getAllValues(): number[] {
    return this.value;
  }
  public setValue(newValue: number): void {
    this.value.push(newValue);
  }
  public sumValues(): number {
    return this.value.reduce(
      (acumulator, currentValue) => acumulator + currentValue
    );
  }
}
