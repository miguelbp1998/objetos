class Car 
{
    Integer id;
    String license;
    Account driver;
    Integer passenger;

    public Car (String license, Account driver)
    {
        this.license = license;
        this.driver = driver;
    }

    void printData ()
    {
        System.out.println("Tu conductor de uber es " + driver.name + " con placas " + license + " y el cupo maximo de pasajeros es de " + passenger);
    }
}
