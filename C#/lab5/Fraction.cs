using System.Runtime.CompilerServices;

namespace lab5
{
  class Fraction
  {
    public int Numerator { get; set; }

    public int Denominator { get; set; }

    public Fraction(int _num, int _den)
    {
      Numerator = _num;
      Denominator = _den;
    }

    public Fraction(Fraction fraction) : this(fraction.Numerator, fraction.Denominator) { }
    
    public Fraction() : this(3, 4) { }

    public static Fraction operator +(Fraction fra1, Fraction fra2)
    {
      Fraction result = new Fraction();
      int numerator1 = fra1.Numerator * fra2.Denominator;
      int numerator2 = fra2.Numerator * fra1.Denominator;
      result.Numerator = numerator1 + numerator2;
      result.Denominator = fra1.Denominator * fra2.Denominator;
      return result;
    }

    public static Fraction operator ++(Fraction fra)
    {
      fra.Numerator += fra.Denominator;
      return fra;
    }
    
    public static bool operator ==(Fraction fra1, Fraction fra2)
    {
      return (float)(fra1.Numerator / fra2.Denominator) == (float)(fra2.Numerator / fra2.Denominator);
    }

    public static bool operator !=(Fraction fra1, Fraction fra2)
    {
      return !(fra1==fra2);
    }
    
    public void Display()
    {
      Console.WriteLine(Numerator);
      Console.WriteLine("__\n");
      Console.WriteLine(Denominator);
    }
  }
}