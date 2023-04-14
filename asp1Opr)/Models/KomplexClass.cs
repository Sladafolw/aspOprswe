using asp1Opr_.ViewModel;

namespace asp1Opr_.Models
{
    public class KomplexClass
    {
        public int x { get; set; } = 0;//вещественная часть
        public int y { get; set; } = 0;//мнимая часть

        public KomplexClass(int x, int y)//конструктор с параметрами
        {
            this.x = x; this.y = y;
        }
        public KomplexClass()//конструктор с параметрами
        {
         
        }
        public static KomplexClass operator +(KomplexClass A, KomplexClass B)//перегрузка оператора сложения
        {
            int X = A.x + B.x; int Y = A.y + B.y;
            return new KomplexClass(X, Y);
        }
        public static KomplexClass  operator -(KomplexClass A, KomplexClass B)//перегрузка оператора вычитания
        {
            int X = A.x - B.x; int Y = A.y - B.y;
            return new KomplexClass(X, Y);
        }
        public static KomplexClass operator *(KomplexClass A, KomplexClass B)//перегрузка оператора умножения
        {
            int X = A.x * B.x - A.y * B.y; int Y = A.x * B.y + B.x * A.y;
            return new KomplexClass(X, Y);
        }
        public static bool operator ==(KomplexClass A, KomplexClass B)//перегрузка оператора проверки на равенство
        {
            if ((Math.Abs(A.y - B.y) < 0.0000001 && Math.Abs(A.x - B.x) < 0.0000001))
            {
                return true;
            }
            return false;
        }
        public static bool operator !=(KomplexClass A, KomplexClass B)//перегрузка оператора проверки на неравенство
        {
            if ((Math.Abs(A.y - B.y) > 0.0000001 && Math.Abs(A.x - B.x) > 0.0000001))
            {
                return true;
            }
            return false;
        }

        public override string ToString()//переопределение метода ToString()
        {
            return " C = " + x + " + " + y + "i";
        }

        public override int GetHashCode()//переопределение метода GetHashCode() - возвращает хэш-код текущего объекта
        {
            return (int)y ^ (int)x;
        }
        public override bool Equals(object obj)//переопределение метода Equals() - определяет, равны ли два экземпляра объекта
        {
            if (obj == null)
            {
                return false;
            }

            KomplexClass? n = obj as KomplexClass;
            if (n == null)
            {
                return false;
            }

            return (Math.Abs(y - n.y) < 0.0000001) && (Math.Abs(x - n.x) < 0.0000001);
        }

    }
}
