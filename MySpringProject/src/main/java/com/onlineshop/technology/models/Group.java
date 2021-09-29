package com.onlineshop.technology.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "data_group")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Group implements Serializable {

    @Id
    @Column(name = "group_id", nullable = false, updatable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "group_code")
    private String groupCode;

    @Column(name = "group_name")
    private String groupName;

    @Column(name = "feature_code")
    private String featureCode;

    @Column(name = "active")
    private Boolean isActive;

    @Column(name = "note")
    private String note;

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    public Long getId() {
        return id;
    }

    public String getGroupCode() {
        return groupCode;
    }

    public void setGroupCode(String groupCode) {
        this.groupCode = groupCode;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getFeatureCode() {
        return featureCode;
    }

    public void setFeatureCode(String groupFunctionCode) {
        this.featureCode = groupFunctionCode;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }
}
