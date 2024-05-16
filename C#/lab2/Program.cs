namespace Lab2
{
  internal class Program
  {
    static void AssignValueToArray(int[,] arr)
    // فنكشن لتعين قيمه من المستخدم لعناصر مصفوفه 
    // 2D
    {
      int RowOfLength = arr.GetLength(0);
      int ColOfLength = arr.GetLength(1);
      Console.WriteLine($"Tybe {RowOfLength * ColOfLength} Numbers.");
      for (int i = 0; i < RowOfLength; i++)
      {
        for (int j = 0; j < ColOfLength; j++)
          arr[i, j] = Convert.ToInt16(Console.ReadLine());
      }
    }
    static int MatrixMultiplication(int[,] arr1, int[,] arr2)
    // وظيفه ترجع قيمة حاصل ضرب مصفوفتين
    // 2D
    {
      int sum = 0;
      int RowOfLength = arr1.GetLength(0);
      int ColOfLength = arr1.GetLength(1);
      for (int i = 0; i < RowOfLength; i++)
      {
        for (int j = 0; j < ColOfLength; j++)
        {
          sum += (arr1[i, j] * arr2[i, j]);
        }
      }
      return sum;
    }

    static int AverageFor2d(int[,] arr)
    // وظيفه لحساب متوسط الدرجات في
    //  2D Array
    {
      int sum = 0;
      int length = 0;
      foreach (int item in arr)
      {
        length += 1;
        sum += item;
      }
      return (sum / length);
    }
    private static void Main(string[] args)
    {
      #region Problem1
      int NUM = 0;
      while (NUM <= 100)
      {
        Console.WriteLine(NUM);
        NUM += 4;
      }
      #endregion

      #region Problem2
      int SumOfP2 = 1;
      for (int i = 0; i < 10; i++)
      {
        Console.WriteLine("Giv me 10 numbers:");
        Console.WriteLine($"Number{i + 1}:");
        int input = Convert.ToInt16(Console.ReadLine());
        SumOfP2 *= input;
      }
      Console.WriteLine($"Result sum is {SumOfP2}");
      #endregion

      #region Problem3
      int total = 100;
      int SumOfP3 = 0;
      Console.WriteLine("Giv me numbers, but Equel 100:");
      do
      {
        Console.WriteLine($"Your total numbers's {SumOfP3}. Your honor's {total}");
        int UserNum = Convert.ToInt16(Console.ReadLine());
        SumOfP3 += UserNum;
        total -= SumOfP3;
      } while (total > 0);
      if (SumOfP3 == 100)
      {
        Console.WriteLine($"Congratulations. Your total is Equel {SumOfP3}");
      }
      else
      {
        Console.WriteLine($"Your total is Not equel 100. Your total is {SumOfP3}");
      }
      #endregion

      #region Arrays
      ///////// 1 ////////////
      int[] student1 = new int[5];
      int[,] student2 = new int[1, 5];
      // لوب لتهية البيانات في المصفوفه
      for (int i = 0; i < student1.Length; i++)
      {
        Console.WriteLine($"Giv me ({i + 1}-5) Degrres:");
        int degree = Convert.ToInt16(Console.ReadLine());
        student1[i] = degree;
        student2[0, i] = degree;
      }
      // شرط لعرض نجاح او رسب الطالب وحفظ في متغير باستخدام
      // Ternary Operator
      string OneD = (student1.Average() >= 50) ? "Success" : "Fail";
      string TwoD = (AverageFor2d(student2) >= 50) ? "Success" : "Fail";
      Console.WriteLine($"1D is {OneD}. 2D is {TwoD}.");
      // Console.WriteLine(student1.Sum());
      // Console.WriteLine(student1.Max());
      ///////// 2 ////////////
      int[] ReSizeStd1 = new int[6];
      // لوب لنسخ محتوي المصفوفه 
      // student1 to ReSizeStd1
      for (int i = 0; i < student1.Length; i++)
      {
        ReSizeStd1[i] = student1[i];
      }
      // Set the ReSizeStd1 var reference to Student1. After that, the garbage calculator can remove the old Student 1 reference
      student1 = ReSizeStd1;
      // هنا عاملين نيستيد لوب لتشفيت العناصر في المصفوفه
      // اللوب الاساسية بعدد العناصر في المصفوفه
      // ام اللوب المتداخلة تستخدم لتشفيت عنصر بعنصر
      for (int i = 0; i < student1.Length; i++)
      {
        for (int j = 0; j < student1.Length - 1; j++)
        {
          student1[j] = student1[j + 1];
          // Console.WriteLine(student1[j]);
        }
        // Console.WriteLine($"{i+1}Loop");
      }
      #endregion

      #region Try to solv-1
      int[,] input1 = new int[1, 3];
      int[,] input2 = new int[1, 3];
      AssignValueToArray(input1);
      AssignValueToArray(input2);
      Console.WriteLine($"The Rusilt two arrays is {MatrixMultiplication(input1, input2)}.");
      #endregion

      #region Try to solv-2
      // تهية JaggedArray بثلاث مصفوفات 
      int[][] JaggedArray = { new int[] { 10, 20, 30 }, new int[] { 11, 22 }, new int[] { 88, 99 } };
      // لوب علي عدد العناصر = 3
      for (int i = 0; i < JaggedArray.Length; i++)
      {
        // تهيئة متغير ليحمل اكبر قيمة في كل مصفوفه علي حده
        int MaxOfValue = 0;
        for (int j = 0; j < JaggedArray[i].Length; j++)
        {
          // شرط للتاكد ان متغير الماكس فاليو يحمل اكبر قيمه
          if (JaggedArray[i][j] > MaxOfValue)
            MaxOfValue = JaggedArray[i][j];
        }
        Console.WriteLine($"Max Value in Array{i + 1} = {MaxOfValue}");
      }
      #endregion
    }
  }
}