package com.cpl.repository;

import com.cpl.entity.Users;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	
	Optional<Users> findByEmailAndPassword(String email, String password);

}
