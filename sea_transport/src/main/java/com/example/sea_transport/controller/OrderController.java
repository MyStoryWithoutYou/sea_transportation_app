package com.example.sea_transport.controller;

import com.example.sea_transport.model.Order;
import com.example.sea_transport.repository.OrderRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@CrossOrigin
public class OrderController {
    private final Logger log = LoggerFactory.getLogger(OrderController.class);
    private OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/orders")
    Collection<Order> order() {
        return orderRepository.findAll();
    }

    @GetMapping("/order/{id}")
    ResponseEntity<?> getOrder(@PathVariable Long id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/order")
    ResponseEntity<Order> createOrder(@RequestBody Order order) throws URISyntaxException {
        log.info("Request to create order: {}", order);
        Order result = orderRepository.save(order);
        return ResponseEntity.created(new URI("/api/group/" + result.getId()))
                .body(result);
    }

    @PutMapping("/order")
    ResponseEntity<Order> updateGroup(@RequestBody Order order) {
        log.info("Request to update order: {}", order);
        Order result = orderRepository.save(order);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        log.info("Request to delete order: {}", id);
        orderRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
