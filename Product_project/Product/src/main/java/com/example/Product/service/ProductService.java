package com.example.Product.service;

import com.example.Product.client.FullResponse;
import com.example.Product.client.Reviews;
import com.example.Product.client.Supplier;
import com.example.Product.feign.ReviewClient;
import com.example.Product.feign.SupplierClient;
import com.example.Product.model.Product;
import com.example.Product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ReviewClient reviewClient;
    @Autowired
    private SupplierClient supplierClient;


    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public void updateProduct(Long id, Product updatedProduct) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        product.setName(updatedProduct.getName());
        product.setDescription(updatedProduct.getDescription());
        product.setPrice(updatedProduct.getPrice());
       // product.setQuantity(updatedProduct.getQuantity());
        productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public List<Reviews> getReviewsByProductId(Long productId) {
        return reviewClient.getReviewsByProductId(productId);  // Use the Feign client to get reviews
    }
//    public FullResponse getFullResponse(Long productId) {
//        Product product = productRepository.findById(productId).orElseThrow(null);
//        List<Reviews> review = reviewClient.getReviewsByProductId(productId);
//        Supplier supplier= supplierClient.getSupplierByProductId(productId);
//        FullResponse response = new FullResponse();
//        response.setProductId(productId);
//        response.setName(product.getName());
//        response.setDescription(product.getDescription());
//        response.setPrice(product.getPrice());
//        response.setReviews(review);
//        response.setSupplier(product.getSupplier());
//        return response;
//        }

    public FullResponse getFullResponse(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        List<Reviews> reviews = reviewClient.getReviewsByProductId(productId);
        Supplier supplier = supplierClient.getSupplierByProductId(productId);

        FullResponse response = new FullResponse();
        response.setProductId(productId);
        response.setName(product.getName());
        response.setDescription(product.getDescription());
        response.setPrice(product.getPrice());
        response.setSupplier(supplier);
        response.setReviews(reviews);
        return response;


    }}

