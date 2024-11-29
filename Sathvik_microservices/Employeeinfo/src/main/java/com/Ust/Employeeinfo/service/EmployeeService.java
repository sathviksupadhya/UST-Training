package com.Ust.Employeeinfo.service;

import com.Ust.Employeeinfo.client.Fullresponse;
import com.Ust.Employeeinfo.client.Project;
import com.Ust.Employeeinfo.model.Employee;
import com.Ust.Employeeinfo.repo.Employeerepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class EmployeeService {
    @Autowired
    private Employeerepository repo;
    public Employee saveEmployee(Employee employee) {

        return repo.save(employee);
    }

    public Fullresponse getEmployeesByProjectCcode(Long ccode) {
        Employee employee =repo.findByCcode(ccode).orElse(null);
        List<Project> list=repo.findProjectsByCcode(ccode);
        Fullresponse response = new Fullresponse();
        response.setName(employee.getName());
        response.setDepartment(employee.getDepartment());
        response.setDesignation(employee.getDesignation());
        response.setCcode(employee.getCcode());
        response.setEmail(employee.getEmail());
        response.setPhone(employee.getPhone());
        response.setAddress(employee.getAddress());
        response.setCity(employee.getCity());
        response.setState(employee.getState());
        response.setExp(employee.getExp());
        response.setDoj(employee.getDoj());
        response.setSkills(employee.getSkills());
        response.setProjects(list);
        return response;
    }
}
