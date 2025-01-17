package com.Ust.Employeeinfo.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Fullresponse {
    private Long projectId;
    private String projectName;
    private String projectDescription;
    private String projectManager;
    private int teamMembers;
    private String projectStatus;
    private String projectStartDate;
    private String projectEndDate;
    private double projectBudget;
    private String companyName;
    private Long ccode;
    private String doj;
    public List<Project> projects;


}
