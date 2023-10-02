package com.cpl.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.Outlet;
import com.cpl.repository.OutletRepository;

@Service
public class OutletServices {

	
	@Autowired
	private OutletRepository outletRepository;
	
		
	public Outlet findOutletById(Long outletId) {
		
		return outletRepository.findById(outletId).orElseThrow(
				() -> new RuntimeException(String.format("Outlet with id %s not found", outletId))
		);
	
	}
	

	
	
	
}
