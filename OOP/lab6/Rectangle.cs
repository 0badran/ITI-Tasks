namespace lab6
{
  class Rectangle : Shape
  {
    public Rectangle(Rectangle _rectangle)
    {
      Dim = _rectangle.Dim;
    }
    public Rectangle() { }
    public override int CalcArea()
    {
      int rectangle = Dim * (Dim / 2);
      return rectangle;
    }
  }
}