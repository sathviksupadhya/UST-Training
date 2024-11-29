package com.authentication.Authentication_micro.Service;

import com.authentication.Authentication_micro.Entity.UserCredentialsEntity;
import com.authentication.Authentication_micro.Repository.UserCredentialsDao;
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
        Optional<UserCredentialsEntity> user = userCredentialsDao.findByUsername(username);
        System.out.println("user 2:" + user);
        return user.map(CustomUserDetails::new).orElseThrow(()->new UsernameNotFoundException("username not valid"));
    }

}
