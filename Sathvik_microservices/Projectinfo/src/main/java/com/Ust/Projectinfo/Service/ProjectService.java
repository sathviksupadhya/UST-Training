package com.Ust.Projectinfo.Service;

import com.Ust.Projectinfo.Project.Project;
import com.Ust.Projectinfo.Projectdto.Projectdto;
import com.Ust.Projectinfo.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repo;
    public Project addProject(Projectdto project){
        Project project1 = new Project();
        project1.setProjectBudget(project.getProjectBudget());
        project1.setProjectDescription(project.getProjectDescription());
        project1.setProjectManager(project.getProjectManager());
        project1.setProjectName(project.getProjectName());
        project1.setProjectStatus(project.getProjectStatus());
        project1.setProjectEndDate(project.getProjectEndDate());



    }

}
