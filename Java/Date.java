public class Date {
    private int _month = 0;
    private int _day = 0;
    private int _year = 0;

    public Date(String date) {
        System.out.println(date);
        String[] nums = date.split("/");
        SetMonth(Integer.parseInt(nums[0]));
        SetDay(Integer.parseInt(nums[1]));
        SetYear(Integer.parseInt(nums[2]));
    }

    public void SetMonth(int month) {
        _month = month;
    }

    public void SetDay(int day) {
        _day = day;
    }

    public void SetYear(int year) {
        _year = year;
    }

    public int GetMonth() {
        return _month;
    }

    public int GetDay() {
        return _day;
    }

    public int GetYear() {
        return _year;
    }

    public void DisplayDate() {
        System.out.print(GetMonth());
        System.out.print("/");
        System.out.print(GetDay());
        System.out.print("/");
        System.out.println(GetYear());
    }
}