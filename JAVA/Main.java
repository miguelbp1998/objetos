class Main 
{
    public static void main(String[] args) {
        
        Car car = new Car("ISB35F", new Account("Miguel Buendia", "112221211"));
        car.passenger = 1;
        car.printData();

        Car car2 = new Car("HDD512", new Account("Tatiana Rodriguez", "12312345"));
        car2.passenger = 4;
        car2.printData();

        Car car3 = new Car("ISB32F", new Account("Juan Guzman", "12618237612"));
        car3.passenger = 6;
        car3.printData();
    }
}