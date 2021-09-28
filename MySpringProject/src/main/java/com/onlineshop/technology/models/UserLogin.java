//package com.onlineshop.technology.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import java.io.Serializable;
//
//@Entity
//@Table(name = "user")
//
//public class UserLogin implements Serializable {@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
//
//    private Long id;
//    private String userCode;
//    private String userName;
//    private String userPass;
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    @Id
//    public Long getId() {
//        return id;
//    }
//
//    public String getUserCode() {
//        return userCode;
//    }
//
//    public void setUserCode(String userCode) {
//        this.userCode = userCode;
//    }
//
//    public String getUserName() {
//        return userName;
//    }
//
//    public void setUserName(String userName) {
//        this.userName = userName;
//    }
//
//    public String getUserPass() {
//        return userPass;
//    }
//
//    public void setUserPass(String userPass) {
//        this.userPass = userPass;
//    }
//}
