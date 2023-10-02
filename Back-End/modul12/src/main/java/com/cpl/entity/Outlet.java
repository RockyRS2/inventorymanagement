package com.cpl.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "tb_outlets")
public class Outlet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long outletId;

	private String outletName;

	@OneToOne
	@JoinColumn(name = "user_id")
	private UsersDetails users;

	@JsonIgnore
	@OneToOne(mappedBy = "outlet")
	private Stock stock;

	public Long getOutletId() {
		return outletId;
	}

	public void setOutletId(Long outletId) {
		this.outletId = outletId;
	}

	public String getOutletName() {
		return outletName;
	}

	public void setOutletName(String outletName) {
		this.outletName = outletName;
	}

	public UsersDetails getUsers() {
		return users;
	}

	public void setUsers(UsersDetails users) {
		this.users = users;
	}

	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

	public Outlet(Long outletId, String outletName, UsersDetails users, Stock stock) {
		super();
		this.outletId = outletId;
		this.outletName = outletName;
		this.users = users;
		this.stock = stock;
	}

	
	public Outlet() {}
	
	
}
