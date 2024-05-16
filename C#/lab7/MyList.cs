namespace lab7
{
  public class MyList<DT>
  {
    DT[] Array;

    public MyList(DT[] arr)
    {
      Array = arr;
    }
    public int ArrSearch(DT[] arr, DT item)
    {
      int indexe = -1;
      for (int i = 0; i < arr.Length; i++)
      {
        if (Equals(arr[i], item))
        {
          indexe = i;
          break;
        }
      }
      return indexe;
    }
  }
}