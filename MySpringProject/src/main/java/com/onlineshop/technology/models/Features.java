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
//@Table(name = "feature")
//@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
//public class Features implements Serializable {
//
//    private Long id;
//    private String featureCode;
//    private String featureName;
//    private String icon;
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
//    public String getFeatureCode() {
//        return featureCode;
//    }
//
//    public void setFeatureCode(String featureCode) {
//        this.featureCode = featureCode;
//    }
//
//    public String getFeatureName() {
//        return featureName;
//    }
//
//    public void setFeatureName(String featureName) {
//        this.featureName = featureName;
//    }
//
//    public String getIcon() {
//        return icon;
//    }
//
//    public void setIcon(String icon) {
//        this.icon = icon;
//    }
//}
