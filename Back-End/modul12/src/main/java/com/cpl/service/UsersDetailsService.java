package com.cpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.UsersDetails;
import com.cpl.repository.UsersDetailsRepository;

@Service
public class UsersDetailsService {
    @Autowired
    private UsersDetailsRepository usersDetailsRepository;

    public List<UsersDetails> getAllUsersDetails() {
        return usersDetailsRepository.findAll();
    }

    public Optional<UsersDetails> getUsersDetailsById(Long userDetailsId) {
        return usersDetailsRepository.findById(userDetailsId);
    }

    public UsersDetails createUserDetails(UsersDetails userDetails) {
        return usersDetailsRepository.save(userDetails);
    }

    public UsersDetails updateUsersDetails(Long userDetailsId, UsersDetails userDetails) {
        if (usersDetailsRepository.existsById(userDetailsId)) {
            userDetails.setUserDetailsId(userDetailsId);
            return usersDetailsRepository.save(userDetails);
        }
        return null; // User Details dengan ID yang diberikan tidak ditemukan
    }

    public void deleteUsersDetails(Long userDetailsId) {
        usersDetailsRepository.deleteById(userDetailsId);
    }
}
