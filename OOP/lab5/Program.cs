namespace lab5
{
class Program
{
  private static void Main(string[] args)
  {
    Fraction fraction1 = new Fraction(4, 7);
    Fraction fraction2 = new Fraction();
    Fraction result = fraction1+fraction2;
    result.Display();
  }
}
}