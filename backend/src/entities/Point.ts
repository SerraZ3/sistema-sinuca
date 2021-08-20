export class Point {
  private values: number[] = [];
  private totalValue: number = 0;
  public getCurrentValue(): number {
    let lastValueIndex: number = this.values.length - 1;
    if (lastValueIndex < 0) {
      return 0;
    }
    return this.values[lastValueIndex];
  }
  public getAllValues(): number[] {
    return this.values;
  }

  public setValue(newValue: number): void {
    this.values.push(newValue);
  }
  public getTotalValues(): number {
    return this.totalValue;
  }
  public sumValues(): number {
    let totalValueCalculate = 0;
    if (this.values.length > 0) {
      totalValueCalculate = this.values.reduce(
        (acumulator, currentValue) => acumulator + currentValue
      );
      this.totalValue = totalValueCalculate;
      return this.totalValue;
    }
    return totalValueCalculate;
  }
}
