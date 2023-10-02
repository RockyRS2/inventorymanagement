package com.cpl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpl.entity.Stock;
import com.cpl.repository.StockRepository;

@Service
public class StockService {

    private final StockRepository stockRepository;

    @Autowired
    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Optional<Stock> getStockById(Long id) {
        return stockRepository.findById(id);
    }

    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }
    
    public List<String[]> findAllStockLevel(){
        return stockRepository.findAllStocksUnitItem();
    }
    
    public List<Stock> getStocksByOutlet(Long outletId) {
        return stockRepository.findByOutletOutletId(outletId);
    }

    
}
