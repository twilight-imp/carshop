package demo.model;

public enum Status {
    AWAITING_DELIVERY("Ожидает доставки"),
    IN_STOCK("В наличии"),
    SOLD_OUT("Продан");

    private final String description;
    Status(String description) {this.description = description;}

    public String getDescription() {return description;}
}
