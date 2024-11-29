package com.example.Product.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Supplier {
    private Long supplierId;
    private Long productId;
    private String name;
    private String contactInfo;
    private String address;
}
