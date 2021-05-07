package models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders_table")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "loading_city")
    private String loading_city;

    @Column(name = "shipment_city")
    private String shipment_city;

    @Column(name = "cargo")
    private String cargo;

    public Order() {
    }

    public Order(String loading_city, String shipment_city, String cargo) {
        this.loading_city = loading_city;
        this.shipment_city = shipment_city;
        this.cargo = cargo;
    }

    public String getLoading_city() {
        return loading_city;
    }

    public void setLoading_city(String loading_city) {
        this.loading_city = loading_city;
    }

    public String getShipment_city() {
        return shipment_city;
    }

    public void setShipment_city(String shipment_city) {
        this.shipment_city = shipment_city;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", loading_city='" + loading_city + '\'' +
                ", shipment_city='" + shipment_city + '\'' +
                ", cargo='" + cargo + '\'' +
                '}';
    }
}
