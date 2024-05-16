namespace lab7
{
internal class Program
{
  private static void Main(string[] args)
  {
    int[] arr= new int[]{1,2,3,4,5,6};
    MyList<int> list = new MyList<int>(arr);

    int index = list.ArrSearch(arr, 5);
    Console.WriteLine(index);
  }
}
  
}