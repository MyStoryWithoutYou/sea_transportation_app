package services;

import dao.OrderDao;
import models.Order;
import java.util.List;

public class OrderService {
    private OrderDao ordersDao = new OrderDao();

    public OrderService() {
    }

    public Order findOrder(int id) {
        return ordersDao.findById(id);
    }

    public void saveOrder(Order order) {
        ordersDao.save(order);
    }

    public void deleteOrder(Order order) {
        ordersDao.delete(order);
    }

    public void updateOrder(Order order) {
        ordersDao.update(order);
    }

    public List<Order> findAllOrders() {
        return ordersDao.findAll();
    }
}
