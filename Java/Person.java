import java.util.Scanner;

public class Person {
    private String _name;
    private String _gender;
    private String _birthPlace;
    private Date _birthDate;
    private Date _deathDate;
    private String _seniority;

    public Person() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter name: ");
        String name = input.nextLine();
        SetName(name);
        System.out.println("Enter gender (Male/Female): ");
        String gender = input.nextLine();
        SetGender(gender);
        System.out.println("Enter birthplace: ");
        String birthplace = input.nextLine();
        SetBirthPlace(birthplace);
        System.out.println("Enter birthdate (MM/DD/YYYY): ");
        String birthDate = input.nextLine();
        SetBirthDate(birthDate);
        System.out.println("Enter deathDate (MM/DD/YYYY; 00/00/00000 if alive):");
        String deathDate = input.nextLine();
        SetDeathDate(deathDate);
        System.out.println("Enter seniority: ");
        String seniority = input.nextLine();
        SetSeniority(seniority);
    }

    public void SetName(String name) {
        _name = name;
    }

    public void SetGender(String gender) {
        _gender = gender;
    }

    public void SetBirthPlace(String birthPlace) {
        _birthPlace = birthPlace;
    }

    public void SetBirthDate(String birthDate) {
        _birthDate = new Date(birthDate);
    }

    public void SetDeathDate(String deathDate) {
        _deathDate = new Date(deathDate);
    }

    public void SetSeniority(String seniority) {
        _seniority = seniority;
    }

    public String GetName() {
        return _name;
    }

    public String GetGender() {
        return _gender;
    }

    public String GetBirthPlace() {
        return _birthPlace;
    }

    public Date GetBirthDate() {
        return _birthDate;
    }

    public Date GetDeathDate() {
        return _deathDate;
    }

    public String GetSeniority() {
        return _seniority;
    }
}