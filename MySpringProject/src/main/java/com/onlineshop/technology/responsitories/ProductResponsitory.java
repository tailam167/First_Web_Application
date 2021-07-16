package com.onlineshop.technology.responsitories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshop.technology.models.Product;

public interface ProductResponsitory extends JpaRepository<Product, Integer> {
}
