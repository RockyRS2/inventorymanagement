package com.cpl.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cpl.entity.Outlet;
import com.cpl.entity.Product;
import com.cpl.entity.Stock;
import com.cpl.entity.Supplier;
import com.cpl.entity.Users;
import com.cpl.entity.UsersDetails;
import com.cpl.repository.OutletRepository;
import com.cpl.repository.SupplierRepository;
import com.cpl.service.ProductService;
import com.cpl.service.StockService;
import com.cpl.service.SupplierService;
import com.cpl.service.UsersDetailsService;
import com.cpl.service.UsersService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/dashboard")
public class DashboardController {

	@Autowired
	private StockService stockService;

	@Autowired
	private ProductService productService;

	@Autowired
	private UsersService usersService;

	@Autowired
	private UsersDetailsService usersDetailsService;

	@Autowired
	private SupplierService supplierService;

	@Autowired
	private OutletRepository outletRepository;

	@PostMapping("/login")
	public ResponseEntity<List<String>> login(@RequestBody Map<String, String> loginData) {
	    String email = loginData.get("email");
	    String password = loginData.get("password");

	    Optional<Users> userOptional = usersService.login(email, password);
	    List<String> returnLogin = new ArrayList<>();

	    if (userOptional.isPresent()) {
	        Users user = userOptional.get();
	        if ("1".equals(user.getRoleId())) {
	            returnLogin.add("Admin");
	            return ResponseEntity.ok(returnLogin);
	        } else if ("2".equals(user.getRoleId())) {
	            returnLogin.add("User");
	            if (user.getOutlet() != null) {
	                returnLogin.add(String.valueOf(user.getOutlet().getOutletId()));
	            } else {
	                returnLogin.add("null");  // Add "null" if outlet is null
	            }
	            return ResponseEntity.ok(returnLogin);
	        }
	    }

	    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	}

	@PostMapping("/addUser")
	public ResponseEntity<String> addUser(@RequestBody Map<String, String> userData) {

		Users newUser = new Users();
		newUser.setEmail(userData.get("email"));
		newUser.setPassword(userData.get("password"));

		UsersDetails userDetails = new UsersDetails();
		userDetails.setUser(newUser);
		userDetails.setFullName(userData.get("fullName"));
		userDetails.setAddress(userData.get("address"));
		userDetails.setPhonenumber(userData.get("phoneNumber"));
		
		
		Outlet outlet = new Outlet();
		outlet.setOutletName(userData.get("outletName"));
		outlet.setUsers(userDetails);

		try {

			usersService.createUser(newUser);
			usersDetailsService.createUserDetails(userDetails);
			outletRepository.save(outlet);
			return ResponseEntity.ok("SUCCESS");

		} catch (Exception e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("FAILED");
		}

	}

	@PostMapping("/addSupplier")
	public ResponseEntity<String> addSupplier(@RequestBody Supplier supplier) {
		Supplier addedSupplier = supplierService.addSupplier(supplier);

		if (addedSupplier != null) {
			return ResponseEntity.ok("Supplier added successfully.");
		} else {
			return ResponseEntity.badRequest().body("Failed to add the supplier.");
		}
	}

	@PostMapping("/addProduct")
	public ResponseEntity<String> addProduct(
			@RequestParam("productName") String productName,
			@RequestParam("price") double price,
			@RequestParam("description") String description,
			@RequestParam("weight") double weight,
			@RequestParam("supplier") String supplierId,
			@RequestParam("image") MultipartFile image) {

		try {

			
			Product product = new Product();
			Supplier supplier = supplierService.findSupplierById(supplierId);

			product.setProductName(productName);
			product.setDateCreated(new Date(System.currentTimeMillis()));
			product.setPrice(price);
			product.setDescription(description);
			product.setWeight(weight);
			product.setSupplier(supplier);

		
			if (image != null) {
				product.setImage(image.getBytes());
			}

			
			productService.saveProduct(product);

			return ResponseEntity.ok("Product added successfully.");
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Failed to add the product.");
		}
	}

	@PostMapping("/addStock")
	public ResponseEntity<String> addStock(@RequestParam("productId") Long productId,
			@RequestParam("quantity") int quantity) {

		try {
			Product optionalProduct = productService.getProductById(productId);

			if (optionalProduct != null) {

				// Buat objek Stock
				Stock stock = new Stock();
				stock.setProduct(optionalProduct);
				stock.setQuantity(quantity);

				// Simpan Stock
				stockService.saveStock(stock);

				return ResponseEntity.ok("Stock added successfully.");
			} else {
				return ResponseEntity.badRequest().body("Product not found.");
			}
		} catch (Exception e) {
			return ResponseEntity.badRequest().body("Failed to add stock.");
		}
	}
	
	
	@GetMapping("/detail/{productId}")
	public Product detailProduct(
			@PathVariable(name = "productId")String productId
	) {
		return productService.getProductById(Long.parseLong(productId));
	}
	
	
	@PostMapping("/update")
	public String updateProduct(
			@RequestParam("productId") String productId,
			@RequestParam("productName") String productName,
			@RequestParam("price") double price,
			@RequestParam("description") String description,
			@RequestParam("weight") double weight
	) {
		
		Product product = productService.getProductById(Long.parseLong(productId));
		product.setProductName(productName);
		product.setPrice(price);
		product.setDescription(description);
		product.setWeight(weight);
		
		try {
			productService.saveProduct(product);
			return "Product updated successfully";
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return "Failed to update the product";
		}
	}
	
	
	@DeleteMapping("/delete/{productId}")
	public String deleteProduct(
		@PathVariable(name = "productId") Long productId	
	) {	
		try {
			productService.deleteProduct(productId);
			return "Product deleted successfully";
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return "Product deleted successfully";
		}
	
	}
	
	
	
	

	@GetMapping("/allSuppliers")
	public List<Supplier> getAllSuppliers() {
		return supplierService.getAllSuppliers();
	}

	@GetMapping("/allusers")
	public List<UsersDetails> getAllUsersDetails() {
		return usersDetailsService.getAllUsersDetails();
	}

	@GetMapping("allProduct")
	public List<Product> getAllProduct() {
		return productService.getAllProducts();
	}

	@GetMapping("/allStocks")
	public List<Stock> getAllStocks() {
		return stockService.getAllStocks();
	}
	
	@GetMapping("/allProductBySupplier/{supplierId}")
	public List<Product> getAllProductsBySupplier(@PathVariable("supplierId") Long supplierId) {
	    return productService.getProductsBySupplier(supplierId);
	}

}
