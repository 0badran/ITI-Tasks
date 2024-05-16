using System.Runtime.CompilerServices;
using System.Security.Cryptography.X509Certificates;

namespace uplab6
{
  class Picture
  {
    Shape[] Shapes;
    public Picture(Shape[] _arr)
    {
      Shapes = _arr;
    }
    Square _square;

    #region Composition
    public Square Square{get => _square; set{_square = new(value);}}
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
      int sum=0;
      foreach (Shape shape in Shapes)
      {
        sum+=shape.CalcArea();
      }
      Console.WriteLine(sum);
    }
    #endregion

  }
}