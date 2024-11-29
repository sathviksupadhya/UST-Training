package com.Composite.compositekey_exmpl;

import java.io.Serializable;
import java.util.Objects;

public class EmployeeId implements Serializable {
    private Long id;
    private Integer age;

    public EmployeeId() {}

    public EmployeeId(Long id, Integer age) {
        this.id = id;
        this.age = age;
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

    // Override equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof EmployeeId)) return false;
        EmployeeId that = (EmployeeId) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(age, that.age);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, age);
    }
}
