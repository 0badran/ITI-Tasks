struct Students 
{
  public string ID;
  public string Name;
  public int Age;
  public string Grade;
}
internal class Program
{
  static void AddStudents(Students[] arr)
  {
    for(int i =0;i<arr.Length;i++)
    {
      Console.WriteLine($"Recordset The student {i+1}th");
      Console.WriteLine("What's Your ID.");
      arr[i].ID = Console.ReadLine();
      Console.WriteLine("Your Name.");
      arr[i].Name = Console.ReadLine();
      Console.WriteLine("Your Age.");
      arr[i].Age = Convert.ToInt16(Console.ReadLine());
      Console.WriteLine("Your Grade.");
      arr[i].Grade = Console.ReadLine();
    }
  }
  static void EditStudent(ref Students[] arr, int num)
  {
      Console.WriteLine("Your New Name.");
      arr[num].Name = Console.ReadLine();
      Console.WriteLine("Your New Age.");
      arr[num].Age = Convert.ToInt16(Console.ReadLine());
      Console.WriteLine("Your New Grade.");
      arr[num].Grade = Console.ReadLine();
  }
  static void DeleteStudent(ref Students[] arr, int num)
  {
    arr[num].ID = "";
    arr[num].Name = "";
    arr[num].Age = 0;
    arr[num].Grade = "";
  }
  static void DisplayOne(Students[] arr, int num)
  {
    Console.WriteLine($"ID: {arr[num].ID}");
    Console.WriteLine($"Name: {arr[num].Name}");
    Console.WriteLine($"Age: {arr[num].Age}");
    Console.WriteLine($"Grade: {arr[num].Grade}");
  }
  static void DisplayAll(Students[] arr)
  {
    for(int i=0;i<arr.Length;i++)
    {
      Console.WriteLine($"ID: {arr[i].ID}");
      Console.WriteLine($"Name: {arr[i].Name}");
      Console.WriteLine($"Age: {arr[i].Age}");
      Console.WriteLine($"Grade: {arr[i].Grade}");
    }
  }
    private static void Main(string[] args)
    {
      int StudentLength;
      bool isOn = true;
      Console.WriteLine("How to many of students");
      StudentLength = Convert.ToInt16(Console.ReadLine());
      Students[] student = new Students[StudentLength];
      do
      {
        Console.WriteLine("What you want to do in StudentArray.");
        Console.WriteLine("For(Add Tybe: 0)");
        Console.WriteLine("For(Edit Tybe: 1)");
        Console.WriteLine("For(DisplayOne Tybe: 2)");
        Console.WriteLine("For(DisplayAll Tybe: 3)");
        Console.WriteLine("For(Delete Tybe: 4)");
        Console.WriteLine("For(Exit Tybe: 5)");
        int UserInput = Convert.ToInt16(Console.ReadLine());

        switch(UserInput)
        {
          case 0:
            AddStudents(student);
            break;
          case 1:
            Console.WriteLine("What do want Edit Tybe Student number");
            int num1 = Convert.ToInt16(Console.ReadLine());
            num1 -= 1;
            EditStudent(ref student, num1);
            break;
          case 2:
            Console.WriteLine("What do want Edit Tybe Student number");
            int num2 = Convert.ToInt16(Console.ReadLine());
            num2 -= 1;
            DisplayOne(student, num2);
            break;
          case 3:
            DisplayAll(student);
            break;
          case 4:
            Console.WriteLine("What do want Edit Tybe Student number");
            int num4 = Convert.ToInt16(Console.ReadLine());
            num4 -= 1;
            DeleteStudent(ref student, num4);
            break;
          case 5:
            isOn = false;
            break;
        }
        Console.WriteLine("/////////////////////////////////////");
      } while (isOn);
    }
}