package com.cpl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpl.entity.Supplier;

@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
  
}