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
//@Table(name = "group")
//@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
//public class Group implements Serializable {
//
//    private Long id;
//    private String groupCode;
//    private String groupName;
//    private String groupFunctionCode;
//    private String note;
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
//    public String getGroupCode() {
//        return groupCode;
//    }
//
//    public void setGroupCode(String groupCode) {
//        this.groupCode = groupCode;
//    }
//
//    public String getGroupName() {
//        return groupName;
//    }
//
//    public void setGroupName(String groupName) {
//        this.groupName = groupName;
//    }
//
//    public String getGroupFunctionCode() {
//        return groupFunctionCode;
//    }
//
//    public void setGroupFunctionCode(String groupFunctionCode) {
//        this.groupFunctionCode = groupFunctionCode;
//    }
//
//    public String getNote() {
//        return note;
//    }
//
//    public void setNote(String note) {
//        this.note = note;
//    }
//}
