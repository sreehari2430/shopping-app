package com.example.shoppingbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @GetMapping
    public List<Map<String, Object>> getAllProducts() {

        return List.of(
                Map.of(
                        "id", 1,
                        "name", "Laptop",
                        "price", 75000
                ),
                Map.of(
                        "id", 2,
                        "name", "Phone",
                        "price", 30000
                )
        );
    }
}
