package com.Composite.compositekey_exmpl;

import jakarta.persistence.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.IdClass;


@Entity
@IdClass(EmployeeId.class)
public class Employee {
    @Id
    private Long id;

    @Id
    private Integer age;

    private String name;
    private String department;
    private Double salary;

    // Constructors
    public Employee() {}

    public Employee(Long id, Integer age, String name, String department, Double salary) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }
}
