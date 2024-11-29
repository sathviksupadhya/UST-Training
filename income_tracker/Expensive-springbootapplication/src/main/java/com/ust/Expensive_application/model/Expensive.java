package com.ust.Expensive_application.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="Expensive")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Expensive {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String typetranscations;
    private double amount;
    private String description;
    @CreationTimestamp
    @Column(updatable = false)
    private Date createDate;



}
