namespace lab6
{
  class Circle : Shape
  {
    string hello = "Hello Iam Circle from inside Picture Class:)";

    public string Hello{get => hello; private set{}}
    public Circle(Circle _circle)
    {
      Dim = _circle.Dim;
    }
    public Circle() { }
    public override int CalcArea()
    {
      int circle = (int)(Dim * Dim * Math.PI);
      return circle;
    }
  }
}