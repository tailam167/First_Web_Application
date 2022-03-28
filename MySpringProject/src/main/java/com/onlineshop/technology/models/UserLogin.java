//package com.onlineshop.technology.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.io.Serializable;
//
//@Entity
//@Table(name = "data_user")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//public class UserLogin implements Serializable {
//
//    @Id
//    @Column(name = "user_group_id", nullable = false, updatable = false)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "user_code")
//    private String userCode;
//
//    @Column(name = "user_name")
//    private String userName;
//
//    @Column(name = "user_pass")
//    private String userPass;
//
//    @Column(name = "active")
//    private Boolean isActive;
//
//}
