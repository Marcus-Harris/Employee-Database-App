package com.tts.EmployeeDataBaseApp.service;

import java.util.List;
import com.tts.EmployeeDataBaseApp.modal.Employee;

public interface EmployeeService {
    List<Employee> get();

    Employee get(int id);

    void save(Employee employee);

    void delete(int id);
}
