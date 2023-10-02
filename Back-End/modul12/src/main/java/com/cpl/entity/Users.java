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

import com.fasterxml.jackson.annotation.JsonIgnore;

	
	@Entity
	@Table(name = "users")
	public class Users {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "user_id")
	    private Long userId;

	    @Column(name = "role_id")
	    private String roleId;

	    @Column(name = "Email")
	    private String email;

	    @Column(name = "Password")
	    private String password;
	    
	    @ManyToOne 
	    @JoinColumn(name = "outlet_id") 
	    private Outlet outlet;
		
		public Users(Long userId, String roleId, String email, String password, Outlet outlet) {
			super();
			this.userId = userId;
			this.roleId = roleId;
			this.email = email;
			this.password = password;
			this.outlet = outlet;
		}
		
		




		public Long getUserId() {
			return userId;
		}






		public void setUserId(Long userId) {
			this.userId = userId;
		}






		public String getRoleId() {
			return roleId;
		}






		public void setRoleId(String roleId) {
			this.roleId = roleId;
		}






		public String getEmail() {
			return email;
		}






		public void setEmail(String email) {
			this.email = email;
		}






		public String getPassword() {
			return password;
		}






		public void setPassword(String password) {
			this.password = password;
		}






		public Outlet getOutlet() {
			return outlet;
		}






		public void setOutlet(Outlet outlet) {
			this.outlet = outlet;
		}






		public Users (){
			
		}
	    
	    
	    

}
