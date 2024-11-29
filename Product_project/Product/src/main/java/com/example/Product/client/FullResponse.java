package com.example.Product.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class FullResponse {
    private Long productId;
    private String name;
    private String description;
    private double price;
    //private int quantity;
    public List<Reviews> reviews;
    public Supplier supplier;

  //getter setter for supplier

    public Supplier getSupplier() { return supplier; }
    public void setSupplier(Supplier supplier) { this.supplier = supplier; }
}
