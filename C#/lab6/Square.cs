namespace lab6
{
  class Square : Shape
  {
    public Square(Square _square)
    {
      Dim = _square.Dim;
    }
    public Square() { }
    public override int CalcArea()
    {
      int square = Dim * Dim;
      return square;
    }
  }

}