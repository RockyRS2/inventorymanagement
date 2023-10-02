package com.cpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.Product;
import com.cpl.repository.ProductRepository;

@Service
public class ProductService {
	
	 private final ProductRepository productRepository;

	    @Autowired
	    public ProductService(ProductRepository productRepository) {
	        this.productRepository = productRepository;
	    }

	    public List<Product> getAllProducts() {
	        return productRepository.findAll();
	    }

	    public Product getProductById(Long id) {
	        return productRepository.findById(id).orElseThrow(
	        		() -> new RuntimeException("Product Not Found !")	
	        );
	    }

	    public Product saveProduct(Product product) {
	        return productRepository.save(product);
	    }

	    public void deleteProduct(Long id) {
	        productRepository.deleteById(id);
	    }

	    public List<Product> getProductsBySupplier(Long supplierId) {
	        return productRepository.findBySupplier_Id(supplierId);
	    }
}
