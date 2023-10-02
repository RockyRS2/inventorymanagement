package com.cpl.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cpl.entity.Outlet;
import com.cpl.entity.Product;
import com.cpl.entity.Stock;
import com.cpl.repository.StockRepository;
import com.cpl.service.StockService;

@RestController
@RequestMapping("/api/v1/stock")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {
	
	  @Autowired
	    private StockService stockService;
	
	@Autowired
	private StockRepository stockRepository;
	
	
	@GetMapping("/all-stock-level")
	public ResponseEntity<List<Stock>> getAllStockLevel() {
	    // Anggap Anda memiliki cara untuk mendapatkan ID outlet yang telah login
	    // Gantikan 1L dengan ID outlet yang sesungguhnya dari pengguna yang telah login
	    Long idOutlet = 1L;

	    List<Stock> stocks = stockService.getStocksByOutlet(idOutlet);
	    return ResponseEntity.ok(stocks);
	}
	
	
//	   @GetMapping("/all-stock-level")
//	    public ResponseEntity<List<Stock>> getAllStockLevel() {
//	        List<String[]> stockProductList = stockService.findAllStockLevel();
//	        List<Stock> returnList = new ArrayList<>();
//
//	        for (String[] strings : stockProductList) {
//	            Stock stock = new Stock();
//	            Product product = new Product();
//	            Outlet outlet = new Outlet();
//
//	            product.setProductName(strings[0]);
//	            outlet.setOutletName(strings[1]);
//
//	            if (strings[2] != null) {
//	                stock.setQuantity(Integer.parseInt(strings[2]));
//	            } else {
//	                stock.setQuantity(0);
//	            }
//
//	            stock.setProduct(product);
//	            stock.setOutlet(outlet);
//
//	            returnList.add(stock);
//	        }
//
//	        return ResponseEntity.ok(returnList);
//	    }
	   
	   @PostMapping
	   public ResponseEntity<Stock> addStock(@RequestBody Stock stock) {
	     Stock savedStock = stockService.saveStock(stock);
	     return ResponseEntity.ok(savedStock);
	   }
	   
	   @GetMapping("/stocks-by-outlet/{outletId}")
	   public ResponseEntity<List<Stock>> getStocksByOutlet(@PathVariable("outletId") Long outletId) {
	       List<Stock> stocks = stockService.getStocksByOutlet(outletId);
	       return ResponseEntity.ok(stocks);
	   }

}
