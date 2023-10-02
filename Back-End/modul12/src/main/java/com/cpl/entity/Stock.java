package com.cpl.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "stock")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quantity")
    private int quantity;
    
    @ManyToOne  // Perubahan di sini
    @JoinColumn(name = "product_id")
    private Product product;
    
    @ManyToOne  // Perubahan di sini
    @JoinColumn(name = "outlet_id")
    private Outlet outlet;
    
    
    

	public Stock(Long id, int quantity, Product product, Outlet outlet) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.product = product;
		this.outlet = outlet;
	}
	
	




	public Long getId() {
		return id;
	}






	public void setId(Long id) {
		this.id = id;
	}






	public int getQuantity() {
		return quantity;
	}






	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}






	public Product getProduct() {
		return product;
	}






	public void setProduct(Product product) {
		this.product = product;
	}






	public Outlet getOutlet() {
		return outlet;
	}






	public void setOutlet(Outlet outlet) {
		this.outlet = outlet;
	}






	public Stock() {
    	
    }
    
}
