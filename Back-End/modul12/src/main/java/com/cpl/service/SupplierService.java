package com.cpl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.Supplier;
import com.cpl.repository.SupplierRepository;

@Service
public class SupplierService {
    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    public Supplier addSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }
    
    
    
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }
    
    
    public Supplier findSupplierById(String supplierId) {
    	
    	return supplierRepository.findById(Long.parseLong(supplierId)).orElseThrow(
    			() -> new RuntimeException("Supplier Not Found")
    	);
    	
    }

   
}
