package com.example.Product.client;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Reviews {
    private Long id;
    private Long productId;
    private String comment;
    private Integer rating;

}
