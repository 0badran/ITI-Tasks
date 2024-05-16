namespace Lab1
{
  internal class Program
  {
    static void Main(string[] args)
    {
      #region Problem1
      Console.WriteLine("Hello, World!.");
      #endregion

      #region Problem2
      Console.WriteLine("Tybe R of circle:");
      var Input = Console.ReadLine();
      int Radius = Convert.ToInt16(Input);
      double Rusilt = Math.PI * (Radius * Radius);
      Console.WriteLine(Rusilt);
      #endregion

      // #region Problem3
      //   Console.WriteLine("First Number: ");
      //   int First = Convert.ToInt16(Console.ReadLine());
      //   Console.WriteLine("Second Number: ");
      //   int Second = Convert.ToInt16(Console.ReadLine());
      //   Console.WriteLine("/////////Result//////////");
      //   Console.WriteLine(First+Second);
      //   Console.WriteLine(First-Second);
      //   Console.WriteLine(First/Second);
      //   Console.WriteLine(First*Second);
      // #endregion

      #region Problem4
        Console.WriteLine("Giv me a number: ");
        int num = Convert.ToInt16(Console.ReadLine());
        if (num == 0)
        {
          Console.WriteLine("It's Zero.");
        }
        else if(num % 2==0)
        {
          Console.WriteLine("It's Even.");
        }
        else
        {
          Console.WriteLine("It's Odd.");
        }
      #endregion

      #region Problem5
        Console.WriteLine("Your grade:");
        int grade= Convert.ToInt16(Console.ReadLine());
        if (grade >= 90)
        {
          Console.WriteLine("A");
        }
        else if(grade >=80)
        {
          Console.WriteLine("B");

        }
        else if(grade >=70)
        {
          Console.WriteLine("C");

        }
        else if(grade >=60)
        {
          Console.WriteLine("D");

        }
        else
        {
          Console.WriteLine("F");
        }
      #endregion

      #region Problem6
        Console.WriteLine("First Number: ");
        int First = Convert.ToInt16(Console.ReadLine());
        Console.WriteLine("Second Number: ");
        int Second = Convert.ToInt16(Console.ReadLine());
        Console.WriteLine("What's math operators: (+ - / *)?");
        var Opert = Console.ReadLine();
        Console.WriteLine("/////////Result//////////");
        switch(Opert)
        {
          case "+":
            Console.WriteLine(First + Second);
            break;
          case "-":
            Console.WriteLine(First - Second);
            break;
          case "/":
            Console.WriteLine(First / Second);
            break;
          case "*":
            Console.WriteLine(First * Second);
            break;
          default:
            Console.WriteLine("Its not option.");
            break;
        }
      #endregion
      
      #region Problem7
        Console.WriteLine("Giv Angle1");
        int angle1 = Convert.ToInt16(Console.ReadLine());
        Console.WriteLine("Giv Angle2");
        int angle2 = Convert.ToInt16(Console.ReadLine());
        Console.WriteLine("Giv Angle3");
        int angle3 = Convert.ToInt16(Console.ReadLine());
        int[] Angles = { angle1, angle2, angle3 };
        int AngeleMax = Angles.Max();
        int AngeleMin = Angles.Min();
        if(Angles.Sum()==180 && !(AngeleMin<1))
        {
          
          if (AngeleMax == 90)
          {
            Console.WriteLine("It's Right-angled.");
          }
          else if(AngeleMax < 90)
          {
            Console.WriteLine("It's Acute-angled.");
          }
          else
          {
            Console.WriteLine("It's Obtuse-angled.");
          }
        }
        else
        {
          Console.WriteLine("These are invalid angles of the triangle.");
        }
      #endregion
    }
  }
}