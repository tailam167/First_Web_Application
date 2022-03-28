//package com.onlineshop.technology.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//import java.io.Serializable;
//
//@Entity
//@Table(name = "data_group")
//@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
//public class Group implements Serializable {
//
//    @Id
//    @Column(name = "group_id", nullable = false, updatable = false)
//    @GeneratedValue(strategy=GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "group_code")
//    private String groupCode;
//
//    @Column(name = "group_name")
//    private String groupName;
//
//    @Column(name = "feature_code")
//    private String featureCode;
//
//    @Column(name = "active")
//    private Boolean isActive;
//
//    @Column(name = "note")
//    private String note;
//
//}
