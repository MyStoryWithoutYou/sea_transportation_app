package com.example.sea_transport.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "transportOrders")
public class Order {
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String loading_city;
    @NonNull
    private String shipment_city;
    private String cargo;

    public String toString() {
        return String.format("id=%d, loading_city='%s', shipment_city='%s', cargo=%s",
                id, loading_city, shipment_city, cargo);
    }

    public Order(String loading_city, String shipment_city, String cargo) {
        this.loading_city = loading_city;
        this.shipment_city = shipment_city;
        this.cargo = cargo;
    }
}
