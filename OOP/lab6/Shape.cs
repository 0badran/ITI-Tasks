using System.Security.Cryptography.X509Certificates;

namespace lab6
{
  class Shape
  {
    public Shape(int _dim)
    {
      Dim = _dim;
    }
    public Shape() : this(50) { }
    public int Dim { get; set; }
    public virtual int CalcArea() { return 1; }
  }
}