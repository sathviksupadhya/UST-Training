import java.util.Collections;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Predicate;

public class demo {
    public static void main(String[] args) {
        operations add1 = new Addition();
        System.out.println(add1.operate(4,5));

        operations prod1=new multiplication();
        System.out.println(prod1.operate(3,9));

        System.out.println("----------------------");

        operations add2 = new operations(){
            @Override
            public int operate(int num1, int num2) {
                return num1 + num2;
            }
        };
        System.out.println(add2.operate(4,5));
        operations op1 = new operations(){
            @Override
            public int operate(int num1, int num2) {
                return num1 * num2;
            }
        };
        System.out.println(op1.operate(3,9));
        System.out.println("----------------------");

        operations opp1 = (num1, num2)->num1 * num2;
        System.out.println(opp1.operate(3,9));

        operations opp2 = (n1,n2)-> n1+ n2;
        System.out.println(opp2.operate(4,5));

        System.out.println("----------------------");



        //4 base functional interfaces
        //1.supplier,consumer,predicate,function
        //supplier interface
        BiFunction<Integer,Integer,Integer> add4= (n1,n2)-> n1+n2;
        System.out.println(add4.apply(3,4));

        BiFunction<Integer,Integer,Integer> prod4= (n1,n2)->n1*n2;
        System.out.println(prod4.apply(3,4));

        System.out.println("----------------------");

        //number is odd or even number
        Predicate<Integer> oddEven=(n1)->n1%2==0;
        if(true){
            System.out.println("Number is even");
        }else{
            System.out.println("Number is odd");
        }
        oddEven.test(6);

        //power of a number
        Function<Integer,Integer> power= (n1)->(int)Math.pow(n1,2);
        System.out.println(power.apply(3));

        Function<Integer,Integer> power2 = (n1)->(int)Math.pow(n1,4);
        System.out.println(power2.apply(5));

        System.out.println("----------------------");

        //String is palindrome or not
        Predicate<String> isPalindrome=(s)->{
            StringBuilder sb=new StringBuilder(s);
            return sb.reverse().toString().equals(s);
        };

        System.out.println(isPalindrome.test("madam"));
        System.out.println(isPalindrome.test("hello"));

        System.out.println("----------------------");
        Predicate<String> ispalindrome2=(s1)->{
            StringBuilder sb = new StringBuilder(s1);
            return sb.reverse().toString().equalsIgnoreCase(s1);

        };
        System.out.println(ispalindrome2.test("1221"));
        System.out.println(ispalindrome2.test("hello"));









    }
}
