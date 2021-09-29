package com.onlineshop.technology.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "data_group_permission")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class GroupPermission implements Serializable {

    @Id
    @Column(name = "group_permission_id", nullable = false, updatable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "group_code")
    private String groupCode;

    @Column(name = "feature_code")
    private String featureCode;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getGroupCode() {
        return groupCode;
    }

    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }

    public String getFeatureCode() {
        return featureCode;
    }

    public void setFeatureCode(String functionCode) {
        this.featureCode = functionCode;
    }
}
