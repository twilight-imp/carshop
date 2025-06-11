package demo.dto;

import demo.model.Status;

public class CarDto {

    private String id;
    private String brand;
    private String model;
    private int price;
    private String color;
    private String power;
    private String gearbox;
    private String drive;

    private Status status;

    public CarDto(String id, String brand, String model, int price, String color, String power, String gearbox, String drive, Status status) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.power = power;
        this.gearbox = gearbox;
        this.drive = drive;
        this.status = status;
    }

    protected CarDto() {
    }

    public String getId() {return id;}

    public void setId(String id) {this.id = id;}

    public String getBrand() {return brand;}

    public void setBrand(String brand) {this.brand = brand;}

    public String getModel() {return model;}

    public void setModel(String model) {this.model = model;}

    public int getPrice() {return price;}

    public void setPrice(int price) {this.price = price;}


    public String getColor() {return color;}

    public void setColor(String color) {this.color = color;}

    public String getPower() {return power;}

    public void setPower(String power) {this.power = power;}

    public String getGearbox() {return gearbox;}

    public void setGearbox(String gearbox) {this.gearbox = gearbox;}

    public String getDrive() {return drive;}

    public void setDrive(String drive) {this.drive = drive;}

    public Status getStatus() {return status;}

    public void setStatus(Status status) {this.status = status;}
}