using System.Text.RegularExpressions;


namespace lab4
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    internal class Student(string _id, string _name, int _age, int _item)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    {
    string id = _id;
    string name = _name;
    int age = _age;
     string passw;

        public string[] ArryayGrads { get; set; } = new string[_item];
        public string ID{get => id; set{
        if (value.Length != 14)
        {
          throw new Exception("You must be ID is 14 numbers.");
        }
      }}
    public string Name{get => name; set{
        if (value.Length < 3)
        {
          throw new Exception("You cannot use a name that is less than 6 characters long.");
        }
      }}
    public int Age{get => age; set{
        if (value < 21)
        {
          throw new Exception("You must be 20 years old.");
        }
      }}
    public string Password {get=>passw; set{
      Regex regex = new Regex(".{8,}");
      if (!(regex.IsMatch(value)))
      {
        throw new Exception("Password must be greater than 8 characters.");
      }
      else{
        passw=value;
      }
    }}
     //   public string Password {get; set;}

    public string Address { get; set;}
    public string UserName{get => name+age;}
    public void Display()
    {
      Console.WriteLine("ID: "+id);
      Console.WriteLine("Name: "+name);
      Console.WriteLine("Age: "+age);
      Console.WriteLine("UserName: "+UserName);

      Console.WriteLine("Address: "+Address);
      Console.WriteLine("pass: "+Password);

      foreach (string item in ArryayGrads)
      {
        Console.WriteLine(item);
      }
    }
    public void ForgetPassw(string User)
    {
      string[] ArrayPass = new string[] {"HHGSF**3_$dg", "U^;D!kajs2", "HFH$%$Djhs38"};
      Random RandomIndex = new Random();
      if (User == UserName)
      {
        Password = ArrayPass[RandomIndex.Next(0, ArrayPass.Length)];
        // Console.WriteLine("Password has been changed successfully. The Password is: "+Password);
      }
      else
      {
        throw new Exception("Username Invilad.");
      }
    }
  }
}