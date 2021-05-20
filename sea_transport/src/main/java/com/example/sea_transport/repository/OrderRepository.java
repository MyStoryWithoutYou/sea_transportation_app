package com.example.sea_transport.repository;

import com.example.sea_transport.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Order findByCargo(String cargo);
}
