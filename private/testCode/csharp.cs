using System;

public class ConstTest 
{
    class SampleClass
    {
        public int x;
        public int y;
        public const int c1 = 5;
        public const int c2 = c1 + 5;

        public SampleClass(int p1, int p2)
        {
            x = p1; 
            y = p2;
        }
    }

    static void Main()
    {
    //new class()
    /*
        new Class()
    */
        SampleClass mC = new SampleClass(11, 22);
        Console.WriteLine("x = {0}, y = {1}", mC.x, mC.y);
        Console.WriteLine("c1 = {0}, c2 = {1}", 
                          SampleClass.c1, SampleClass.c2);
Console.WriteLine($"Hello, {name}! Today is {date.DayOfWeek}, it's {date:HH:mm} now.");
    }

    int getid(int s){

    }
}