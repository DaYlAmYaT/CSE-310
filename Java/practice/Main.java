package practice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

// The class name has to be the same as the filename! First letter has to be capital!
public class Main {
    int x = 1;
    final int y = 10;

    public static void main(String[] args) {
        // The display methods
        System.out.print("Hello World"); // The display method 1: next item being
        // printed on the same line
        System.out.println("Hello World"); // The display method 2: print on a new
        // line

        // Different types of variables
        String firstName = "Yat";
        String lastName = "Lam";
        int age = 20;
        char favoriteLetter = 'Y'; // char is used for a letter only! the letter
        // should be wrapped with single
        // quote!
        float weight = 147.6f; // f should be put after the number to make it a float
        boolean single = true;

        // Display with variable
        System.out.println("My name is " + firstName);

        // Declair variables of the same type in one line
        int x = 1, y = 2, z = 3;
        System.out.println(x);
        System.out.println(y);
        System.out.println(z);

        // Other types of variables
        // The order of storage of integer types: byte, short, int, long
        byte num1 = 127; // Int with boundary between -128 and 127
        short num2 = 32767; // Int with boundary between -32768 and 32767
        // The order of storage of floating point types: float, double
        double num3 = 13.5557;

        // Numbers with sig. fig.
        weight = 15e1f;
        num3 = 12E4;
        System.out.println(weight);
        System.out.println(num3);
        // casting from small to large type size:
        // byte, short, char, int, long, float, double

        // Methods with strings
        firstName.length(); // output: 3
        firstName.toUpperCase(); // output: YAT
        firstName.toLowerCase(); // output: yat
        firstName.indexOf("t"); // output: 2
        // string1.concat(string2) == string1, string2
        String fullName = firstName.concat(lastName); // output: Yat Lam

        // if statement
        if (single) {
            System.out.println("Still single? OMG");
        } else {
            System.out.println("Congrats");
        } // else if can be used if there are more conditions

        // short hand if...else
        single = false;
        String result = (single) ? "Still single? OMG" : "Congrats";
        System.out.println(result);

        // switch statements
        int year = 3;
        switch (year) {
            case 1:
                System.out.println("Freshman");
                break;
            case 2:
                System.out.println("Sophomore");
                break;
            case 3:
                System.out.println("Junior");
                break;
            case 4:
                System.out.println("Senior");
                break;
            default: // in case if there is no such year
                System.out.println("Invalid number typed in");
        }

        // Loops
        // for-each loop
        String[] classes = { "CSE110", "CSE111", "CSE210", "CSE212", "CSE310" };
        for (String i : classes) {
            System.out.println(i);
        }

        // nested arrays
        String[][] families = { { "Baba", "Mami" }, { "Vincent", "Jessica", "Lettie"
        },
                { "Matthew", "Betty", "Etta", "Reyes" }, { "Lee", "Chin", "Yat" } };
        families[3][2] = "Kelvin";
        System.out.println(families[3][2]);

        // Class and object
        Second myObj = new Second(); // Create an object from the Second class
        System.out.println(myObj.x);
        System.out.println(myObj.y);
        myObj.x = 12; // x in Second class can be change while y cannot because we
        // declaired the y as final
    }
}