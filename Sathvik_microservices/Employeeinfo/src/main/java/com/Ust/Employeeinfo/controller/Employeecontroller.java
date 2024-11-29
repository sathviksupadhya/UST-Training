package com.Ust.Employeeinfo.controller;

import com.Ust.Employeeinfo.client.Fullresponse;
import com.Ust.Employeeinfo.model.Employee;
import com.Ust.Employeeinfo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ustaps")
public class Employeecontroller {
    @Autowired
    private EmployeeService service;

    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee){
        return service.saveEmployee(employee);
    }
    @GetMapping("projects/{ccode}")
    public ResponseEntity<Fullresponse> getEmployeeProjectCode(@PathVariable Long ccode){
        return ResponseEntity.ok(service.getEmployeeByProjectCode(ccode));
    }

}
