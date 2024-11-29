package com.SupplierService.supplierMicroservice.repo;

import com.SupplierService.supplierMicroservice.entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SupplierRepo extends JpaRepository<Supplier, Long> {
    Supplier findByProductId(Long productId);
}
