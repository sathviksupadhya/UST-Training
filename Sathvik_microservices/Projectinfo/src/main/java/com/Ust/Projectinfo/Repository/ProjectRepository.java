package com.Ust.Projectinfo.Repository;

import com.Ust.Projectinfo.Project.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository  extends JpaRepository<Project,Long> {
}
