package com.todo.jdo;


import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;


@PersistenceCapable
public class Pojo {
	
@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private Long key;

@Persistent
private String password;

@Persistent
private String passwordagain;

@Persistent
private String name;

@Persistent
private String email;


public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getPasswordagain() {
	return passwordagain;
}

public void setPasswordagain(String passwordagain) {
	this.passwordagain = passwordagain;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

}

