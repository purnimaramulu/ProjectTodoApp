package com.todo.jdo;



	import javax.jdo.annotations.IdGeneratorStrategy;
	import javax.jdo.annotations.PersistenceCapable;
	import javax.jdo.annotations.Persistent;
	import javax.jdo.annotations.PrimaryKey;

	import com.google.appengine.api.datastore.Key;

	@PersistenceCapable
	public class ToDo {		
		
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Long key;
	
	@Persistent
	private String email;
	

	@Persistent
	private String password;



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





}