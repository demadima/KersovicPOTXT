package com.javamaster.controller;

import java.io.Serializable;

public class Notebook implements Serializable{
    private static final long serialVersionUID = 1L;
	
    private int id;
    private String surname;
    private String name;
    private int age;
    private String sex;
    private String phone;
     
    public Notebook(){ }
    public Notebook(String surname,String name , int age, String sex, String phone ){
         
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.phone = phone;
           
    }
    public Notebook(int id, String surname, String name, int age, String sex, String phone){
         
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.phone = phone;
    }
	public int getId() {
		return id;
	}
	
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
     

	
}
