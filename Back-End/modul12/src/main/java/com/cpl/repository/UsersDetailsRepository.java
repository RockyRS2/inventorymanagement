package com.cpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpl.entity.UsersDetails;

@Repository
public interface UsersDetailsRepository extends JpaRepository<UsersDetails, Long> {

}
