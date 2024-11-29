package com.springSecurity.security.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class UserController {

    @GetMapping("/user")
    @PreAuthorize("hasPermission")
    public String getHomePage() {
        return "Hello all welcome to UST!";
    }
    //admin login
    @GetMapping("/admin")
    public String getAdminPage() {
        return "Hello admin, welcome to UST!";
    }

}
