package utils;

import com.google.gson.Gson;
import models.Order;

import java.util.List;

public class SerializationUtil {
    public static String listToJson(List<Order> orders){
        Gson gson = new Gson();
       return gson.toJson(orders);
    }
}
