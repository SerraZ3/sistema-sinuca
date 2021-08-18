export class Point {
  private value: number[];
  public getCurrentValue(): number {
    let lastValueIndex: number = this.value.length - 1;
    if (lastValueIndex < 0) {
      return 0;
    }
    return this.value[lastValueIndex];
  }
  public getAllValues(): number[] {
    return this.value;
  }
  public setValue(newValue: number): void {
    this.value.push(newValue);
  }
  public sumValues(): number {
    if (this.value.length > 0) {
      return this.value.reduce(
        (acumulator, currentValue) => acumulator + currentValue
      );
    }
    return 0;
  }
}
