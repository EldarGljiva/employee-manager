package com.eldar.employee_management.service;

import com.eldar.employee_management.Repository.EmployeeRepository;
import com.eldar.employee_management.entity.Employee;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
