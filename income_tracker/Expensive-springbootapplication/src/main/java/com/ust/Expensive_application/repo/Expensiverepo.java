package com.ust.Expensive_application.repo;

import com.ust.Expensive_application.model.Expensive;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface Expensiverepo extends JpaRepository<Expensive,UUID> {
     List<Expensive> findByDate(Date createDate)

   //public List<Expensive> findByCreateDate(Date createDate);
