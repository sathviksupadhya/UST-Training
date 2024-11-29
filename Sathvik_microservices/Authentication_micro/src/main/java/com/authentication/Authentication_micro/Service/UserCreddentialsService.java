package com.authentication.Authentication_micro.Service;

import com.authentication.Authentication_micro.Entity.UserCredentialsEntity;
import com.authentication.Authentication_micro.Repository.UserCredentialsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserCreddentialsService {
    @Autowired
    UserCredentialsDao authdao;
    @Autowired
    private PasswordEncoder passwordEncoder;
    public UserCredentialsEntity register(UserCredentialsEntity user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return authdao.saveAndFlush(user);
    }

}

