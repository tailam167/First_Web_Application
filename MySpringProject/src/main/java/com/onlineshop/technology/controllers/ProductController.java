package com.onlineshop.technology.controllers;

import java.util.List;

import com.onlineshop.technology.services.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.onlineshop.technology.models.Product;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/list")
    @ResponseStatus(HttpStatus.OK)
    public List<Product> listProducts() {
        return productService.findAllProduct();
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Product create(@RequestBody Product product) {
        return productService.addProduct(product);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public Product update(@RequestBody Product product) {
        return productService.updateProduct(product);
    }

    @DeleteMapping("/delete/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("productId") Integer id) {
        productService.deleteProduct(id);
    }

    @GetMapping("/{productId}")
    @ResponseStatus(HttpStatus.OK)
    public Product get(@PathVariable("productId") Integer id) {
        return productService.findProductById(id);
    }

}
