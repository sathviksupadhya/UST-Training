package com.example.Product.feign;

import com.example.Product.client.Reviews;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name="Reviews", url="http://review-sr:9093/reviews")
public interface ReviewClient {
    @GetMapping("/reviews/product/{productId}")
    List<Reviews> getReviewsByProductId(@PathVariable("productId") Long productId);


}