package com.authentication.Authentication_micro.Repository;

import com.authentication.Authentication_micro.Entity.UserCredentialsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserCredentialsDao extends JpaRepository<UserCredentialsEntity,Integer> {
    public Optional<UserCredentialsEntity> findByUsername(String username);
}
