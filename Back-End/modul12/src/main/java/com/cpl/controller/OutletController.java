package com.cpl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpl.entity.Outlet;
import com.cpl.repository.OutletRepository;
import com.cpl.service.OutletServices;

@RestController
@RequestMapping("/api/v1/outlet")
@CrossOrigin(origins = "http://localhost:3000")
public class OutletController {
	
	
	@Autowired
	public OutletRepository outletRepository;
	
	
	@GetMapping
	public ResponseEntity<List<Outlet>> getAllOutlet() {
		List<Outlet> listOutlet = outletRepository.findAll();
		return ResponseEntity.ok(listOutlet);
	}	

}
