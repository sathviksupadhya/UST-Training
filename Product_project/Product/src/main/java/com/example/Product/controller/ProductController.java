package com.example.Product.controller;

import com.example.Product.client.FullResponse;
import com.example.Product.client.Reviews;
import com.example.Product.client.Supplier;
import com.example.Product.model.Product;
import com.example.Product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product createdProduct = productService.addProduct(product);
        return new ResponseEntity<>(createdProduct, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        productService.updateProduct(id, product);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }

//    @GetMapping("/reviews/product/{productId}")
//    public ResponseEntity<List<Reviews>> getProductReviews(@PathVariable Long productId) {
//        List<Reviews> reviews = productService.getReviewsByProductId(productId);
//        if (reviews.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // No reviews found
//        }
//        return new ResponseEntity<>(reviews, HttpStatus.OK);
//    }
//    @GetMapping("/reviews/product/{productId}")
//    public ResponseEntity<FullResponse> getReviews(@PathVariable("productId") Long productId) {
//        FullResponse reviews = productService.getFullResponse(productId);
//        return new ResponseEntity<>(reviews, HttpStatus.OK);
//    }

//    @GetMapping("/{productId}/supplier")
//    public ResponseEntity<Supplier> getSupplierByProductId(@PathVariable Long productId) {
//        Supplier supplier = productService.getSupplierByProductId(productId);
//        return ResponseEntity.ok(supplier);
//    }
    @GetMapping("/{productId}/details")
    public ResponseEntity<FullResponse> getFullProductDetails(@PathVariable Long productId) {
        FullResponse fullResponse = productService.getFullResponse(productId);
        return ResponseEntity.ok(fullResponse);
}
}
