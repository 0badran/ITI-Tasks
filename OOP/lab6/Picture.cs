using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace lab6
{
  class Picture
  {
    Square _square;

    #region Composition
    public Square Square{get =>new Square(_square) ; set{_square = new Square(value);}}
    #endregion

    #region Aggregation
    public Rectangle Rectangle { get; set;}
    #endregion

    #region Assosiation
    public void CircleSayHello(Circle c)
    {
      Console.WriteLine(c.Hello);
    }
    #endregion

    #region calcTotalAreaFunc
    public void calcTotalArea()
    {
      Console.WriteLine(Rectangle.CalcArea() + Square.CalcArea());
    }
    #endregion

  }
}