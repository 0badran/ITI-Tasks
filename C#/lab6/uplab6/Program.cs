namespace uplab6
{
  internal class Program
  {
    private static void Main(string[] args)
    {
      Shape[] shapes = new Shape[]{new Square(), new Rectangle()};
      Picture picture = new(shapes);
      picture.calcTotalArea();
    }
  }
  
}