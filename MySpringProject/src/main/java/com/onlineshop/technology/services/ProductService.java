package com.onlineshop.technology.services;

import com.onlineshop.technology.exceptions.ProductNotFoundException;
import com.onlineshop.technology.models.Product;
import com.onlineshop.technology.responsitories.ProductResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductResponsitory productResponsitory;

    @Autowired
    public ProductService(ProductResponsitory productResponsitory) {
        this.productResponsitory = productResponsitory;
    }

    public Product addProduct(Product product) {
        return productResponsitory.save(product);
    }

    public List<Product> findAllProduct() {
        return productResponsitory.findAll();
    }

    public Product updateProduct(Product product) {
        return productResponsitory.save(product);
    }

    public Product findProductById(Integer productId) {
        return productResponsitory.findById(productId).orElseThrow(() ->
                new ProductNotFoundException("Product with id " + productId + " was not found"));
    }

    public void deleteProduct(Integer productId) {
        productResponsitory.deleteById(productId);
    }

}
