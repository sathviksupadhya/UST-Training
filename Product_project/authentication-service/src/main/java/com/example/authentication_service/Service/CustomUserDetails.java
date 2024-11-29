package com.example.authentication_service.Service;

import com.example.authentication_service.dao.entity.UserCredentialsEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;


public class CustomUserDetails implements UserDetails {

    private String name;
    private String password;
    //private List<SimpleGrantedAuthority> allRoles;

    public CustomUserDetails(UserCredentialsEntity user){
        this.name = user.getName();
        this.password = user.getPassword();
    }

    @Override

    public Collection<? extends GrantedAuthority> getAuthorities(){
        return null;
    }

    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public String getUsername(){
        return name;
    }
}
