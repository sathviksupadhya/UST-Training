package com.Composite.compositekey_exmpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}/{age}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id, @PathVariable Integer age) {
        return employeeService.getEmployeeById(id, age)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @PutMapping("/{id}/{age}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @PathVariable Integer age,
                                                   @RequestBody Employee employeeDetails) {
        return ResponseEntity.ok(employeeService.updateEmployee(id, age, employeeDetails));
    }

    @DeleteMapping("/{id}/{age}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id, @PathVariable Integer age) {
        employeeService.deleteEmployee(id, age);
        return ResponseEntity.noContent().build();
    }
}
