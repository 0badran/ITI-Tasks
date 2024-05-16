namespace lab4
{
internal class Program
{
    private static void Main(string[] args)
    {
      try
      {
        Student std = new Student(_id:"29902071202359", _name:"Ahmed", _age:24, _item:2);
        std.Age=110;
        std.Password = "Ahmedekdjkj";
        std.ArryayGrads[0] = "Math: 20%";
        std.ArryayGrads[1] = "Code: 80%";
        std.Display();
      }
      catch (Exception E)
      {
        Console.WriteLine(E.Message);
      }
    }
} 
}