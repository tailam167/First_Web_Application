package com.onlineshop.technology.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "data_feature")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Features implements Serializable {

    @Id
    @Column(name = "feature_id", nullable = false, updatable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "feature_code")
    private String featureCode;

    @Column(name = "feature_name")
    private String featureName;

    @Column(name = "active")
    private Boolean isActive;

    @Column(name = "icon")
    private String icon;

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }

    public String getFeatureCode() {
        return featureCode;
    }

    public void setFeatureCode(String featureCode) {
        this.featureCode = featureCode;
    }

    public String getFeatureName() {
        return featureName;
    }

    public void setFeatureName(String featureName) {
        this.featureName = featureName;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
