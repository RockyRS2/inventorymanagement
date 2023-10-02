package com.cpl.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cpl.entity.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Long> {

	 @Query(value = "SELECT p.product_name, o.outlet_name, s.quantity FROM products as p CROSS JOIN tb_outlets as o LEFT JOIN stock s ON p.id = s.id AND o.outlet_id = s.outlet_id ORDER BY outlet_name;", nativeQuery = true)


	   List<String[]> findAllStocksUnitItem();
	   
	   List<Stock> findByOutletOutletId(Long outletId);

}
