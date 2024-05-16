using System.Security.Cryptography.X509Certificates;

namespace uplab6
{
  abstract class  Shape
  {
    public Shape(int _dim)
    {
      Dim = _dim;
    }
    public Shape() : this(50) { }
    public int Dim { get; set; }
    public abstract int CalcArea();
  }
}