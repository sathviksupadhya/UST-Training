package com.authentication.Authentication_micro.Controller;

import com.authentication.Authentication_micro.Entity.UserCredentialsEntity;
import com.authentication.Authentication_micro.Service.JwtService;
import com.authentication.Authentication_micro.Service.UserCreddentialsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserCredentialsController {
    @Autowired
    private UserCreddentialsService userCredentialsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    //generate endpoint for registering a user
    @PostMapping("/register")
    public UserCredentialsEntity register(@RequestBody UserCredentialsEntity user) {
        return userCredentialsService.register(user);
    }
    //generate endpoint for validating a token
    @GetMapping("/validate/token")
    public String verifyToken(@RequestParam String token) {
        jwtService.validateToken(token);
        return "token is valid";
    }
    //generate endpoint for authenticating a user
    @PostMapping("/validate/user")
    public String getToken(@RequestBody UserCredentialsEntity user) {
        Authentication authenticate = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword()));
        if(authenticate.isAuthenticated()){
            return jwtService.generateToken(user.getUsername());
        }
        return null;

    }
    
    @GetMapping("/generateToken")
    public String generateToken(@RequestParam String username) {
        return jwtService.generateToken(username);
    }

}
