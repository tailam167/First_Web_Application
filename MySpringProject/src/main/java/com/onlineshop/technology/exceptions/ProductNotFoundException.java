package com.onlineshop.technology.exceptions;

public class ProductNotFoundException extends RuntimeException {
    public ProductNotFoundException(String messageException) {
        super(messageException);
    }
}
