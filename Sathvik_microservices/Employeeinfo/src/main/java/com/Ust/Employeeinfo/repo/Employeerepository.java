package com.Ust.Employeeinfo.repo;

import com.Ust.Employeeinfo.client.Project;
import com.Ust.Employeeinfo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Employeerepository extends JpaRepository<Employee,Long> {
    Employee findByCcode(String ccode);

    List<Project> findProjectsByCcode(Long ccode);
}
