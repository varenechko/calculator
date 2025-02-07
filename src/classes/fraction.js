class Fraction {
  constructor(numerator, denominator, sign = -1) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  sum(fraction) {
    const newNumerator = this.numerator * fraction.denominator + this.denominator * fraction.numerator;
    const newDenominator = fraction.denominator * this.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  sub(fraction) {
    const newNumerator = this.numerator * fraction.denominator - this.denominator * fraction.numerator;
    const newDenominator = fraction.denominator * this.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  mult(fraction) {
    const newNumerator = this.numerator * fraction.numerator;
    const newDenominator = fraction.denominator * this.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  div(fraction) {
    const newNumerator = this.numerator * fraction.denominator;
    const newDenominator = this.denominator * fraction.numerator;
    return new Fraction(newNumerator, newDenominator);
  }

  pow(number) {
    const newNumerator = this.numerator ** number;
    const newDenominator = this.denominator ** number;
    return new Fraction(newNumerator, newDenominator);
  }

  toString() {
    return this.numerator + "->" + this.denominator;
  }
}
