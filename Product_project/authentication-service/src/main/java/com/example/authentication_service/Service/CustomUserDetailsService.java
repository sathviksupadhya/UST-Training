package com.example.authentication_service.Service;

import com.example.authentication_service.dao.UserCredentialsDao;
import com.example.authentication_service.dao.entity.UserCredentialsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserCredentialsDao userCredentialsDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserCredentialsEntity> user = userCredentialsDao.findByName(username);
        System.out.println("user 2: " + user);
        return user.map(CustomUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("username/password not valid"));
    }
}
