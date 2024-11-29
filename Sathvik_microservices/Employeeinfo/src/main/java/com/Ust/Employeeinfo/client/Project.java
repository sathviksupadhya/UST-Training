package com.Ust.Employeeinfo.client;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Project {

        @Id
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

    }
