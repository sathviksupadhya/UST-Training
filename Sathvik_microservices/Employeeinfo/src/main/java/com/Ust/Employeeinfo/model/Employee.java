package com.Ust.Employeeinfo.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Employee {
    private Long ccode;
    private String name;
    private String department;
    private String email;
    private String phone;
    private int age;
    private String doj;
    private String city;
    private String state;
    private List<String> skills;
    private String address;
    private int exp;

}
