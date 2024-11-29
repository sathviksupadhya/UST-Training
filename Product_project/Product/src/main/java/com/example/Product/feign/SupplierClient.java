package com.example.Product.feign;

import com.example.Product.client.Supplier;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="Supplier", url="http://supplier-sr:9092/suppliers")
public interface SupplierClient {
    @GetMapping("/{productId}/details")
     Supplier getSupplierByProductId(@PathVariable Long productId);
}
