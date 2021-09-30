package com.onlineshop.technology.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "data_user_group")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class UserGroup implements Serializable {

    @Id
    @Column(name = "user_group_id", nullable = false, updatable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_code")
    private String userCode;

    @Column(name = "user_group")
    private String userGroup;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    public String getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(String userGroup) {
        this.userGroup = userGroup;
    }
}
