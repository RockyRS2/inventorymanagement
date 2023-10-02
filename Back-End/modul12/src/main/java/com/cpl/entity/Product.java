package com.cpl.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.cpl.security.Base64Util;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "date_created")
    private Date dateCreated;
    
    @JsonIgnore
    @OneToOne(mappedBy = "product")
    private Stock stock;

    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;

    @Column(name = "weight")
    private double weight;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;
    
    @Lob
    @Column(name = "image")
    private byte[] image;

    public Product() {}
    
    
	public Product(Long id, String productName, Date dateCreated, Stock stock, double price, String description,
			double weight, Supplier supplier, byte[] image) {
		super();
		this.id = id;
		this.productName = productName;
		this.dateCreated = dateCreated;
		this.stock = stock;
		this.price = price;
		this.description = description;
		this.weight = weight;
		this.supplier = supplier;
		this.image = image;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	
   
    
}
