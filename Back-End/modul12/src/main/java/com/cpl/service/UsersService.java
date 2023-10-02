package com.cpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.Users;
import com.cpl.repository.UsersRepository;

@Service
public class UsersService {
    @Autowired
    private UsersRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }
    
    public Optional<Users> login(String email, String password) {
        return usersRepository.findByEmailAndPassword(email, password);
    }

    public Optional<Users> getUserById(Long userId) {
        return usersRepository.findById(userId);
    }

    public void createUser(Users user) {
    	user.setRoleId("2");
        usersRepository.save(user);
    }

    public Users updateUser(Long userId, Users user) {
        if (usersRepository.existsById(userId)) {
            user.setUserId(userId);
            return usersRepository.save(user);
        }
        return null; 
    }

    public void deleteUser(Long userId) {
        usersRepository.deleteById(userId);
    }
}
