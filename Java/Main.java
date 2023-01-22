import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<Person> members = new ArrayList<Person>();
        Boolean done = false;
        do {
            System.out.println("0: quit\n1: Add person to the tree\n2: Display info");
            int answer = input.nextInt();
            System.out.println();
            if (answer == 1) {
                Person person = new Person();
                members.add(person);
            } else if (answer == 2) {
                for (Person member : members) {
                    displayInfo(member);
                }
            } else {
                done = true;
            }
            System.out.println();
        } while (!done);
    }

    private static void displayInfo(Person person) {
        System.out.println(person.GetSeniority());
        System.out.print("Name: ");
        System.out.println(person.GetName());
        System.out.print("Gender: ");
        System.out.println(person.GetGender());
        System.out.print("Birthdate: ");
        person.GetBirthDate().DisplayDate();
        if (person.GetDeathDate().GetYear() != 0000) {
            System.out.print("Deathdate: ");
            person.GetDeathDate().DisplayDate();
        }
    }
}