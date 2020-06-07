package com.javamaster.controller;

import java.sql.*;
import java.util.ArrayList;

public class PropertiesDB {
	 private static String url = "jdbc:postgresql://localhost:5432/SoftIndustry";
	    private static String username = "postgres";
	    
	    private static String password = "d121212d";
	    
	    public static ArrayList<Notebook> select() {

	         
	        ArrayList<Notebook> products = new ArrayList<Notebook>();
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	                Statement statement = conn.createStatement();
	                ResultSet resultSet = statement.executeQuery("SELECT * FROM users");
	                while(resultSet.next()){
	                      
	                    int id = resultSet.getInt(1);
	                    String surname = resultSet.getString(2);
	                    String name = resultSet.getString(3);
	                    int age = resultSet.getInt(4);
	                    String sex = resultSet.getString(5);
	                    String phone = resultSet.getString(6);
	                    
	                    
	                    Notebook product = new Notebook(id,surname, name,age ,sex ,phone);
	                    products.add(product);
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return products;
	    }
	    
	    public static int insert(Notebook product) {
	         
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	                String sql = "INSERT INTO users (surname, name , age , sex , phone) Values (?, ?, ?, ?, ?)";
	                try(PreparedStatement preparedStatement = conn.prepareStatement(sql)){
	                    preparedStatement.setString(1, product.getSurname());
	                    preparedStatement.setString(2, product.getName());
	                    preparedStatement.setInt(3, product.getAge());
	                    preparedStatement.setString(4, product.getSex());
	                    preparedStatement.setString(5, product.getPhone());                     	                      
	                    return  preparedStatement.executeUpdate();
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return 0;
	    }
	    
	    
	    public static int update(Notebook product) {
	         
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	                String sql = "UPDATE users SET surname = ?, name = ? , age = ? , sex = ? , phone = ? WHERE id = ?";
	                try(PreparedStatement preparedStatement = conn.prepareStatement(sql)){
	                    preparedStatement.setString(1, product.getSurname());
	                    preparedStatement.setString(2, product.getName());
	                    preparedStatement.setInt(3, product.getAge());
	                    preparedStatement.setString(4, product.getSex());
	                    preparedStatement.setString(5, product.getPhone());  
	                    preparedStatement.setInt(6, product.getId());
	                      
	                    return  preparedStatement.executeUpdate();
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return 0;
	    }
	    
	    public static Notebook selectOne(int id) {
	         
	    	Notebook product = null;
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	                String sql = "SELECT * FROM users WHERE id=?";
	                try(PreparedStatement preparedStatement = conn.prepareStatement(sql)){
	                    preparedStatement.setInt(1, id);
	                    ResultSet resultSet = preparedStatement.executeQuery();
	                    if(resultSet.next()){
	 
	                        int prodid = resultSet.getInt(1);
	                        String surname = resultSet.getString(2);
	                        String name = resultSet.getString(3);
	                        int age = resultSet.getInt(4);
	                        String sex = resultSet.getString(5);
	                        String phone = resultSet.getString(6);
	                        
	                        product = new Notebook(prodid,surname, name,age ,sex ,phone);
	                    }
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return product;
	    }
	    
	    public static int delete(int id) {
	         
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	                String sql = "DELETE FROM users WHERE id = ?";
	                try(PreparedStatement preparedStatement = conn.prepareStatement(sql)){
	                    preparedStatement.setInt(1, id);	                      
	                    return  preparedStatement.executeUpdate();
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return 0;
	    }
	    
	    
	    public static ArrayList<Account> selectAccount() {
	    ArrayList<Account> products = new ArrayList<Account>();
        try{
            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
            try (Connection conn = DriverManager.getConnection(url, username, password)){
                  
                Statement statement = conn.createStatement();
                ResultSet resultSet = statement.executeQuery("SELECT * FROM account");
                while(resultSet.next()){
                      
                    int idAccount = resultSet.getInt(1);
                    String mail = resultSet.getString(2);
                    String password = resultSet.getString(3);
                    

                    Account product = new Account(idAccount,mail, password);
                    products.add(product);
                }
            }
        }
        catch(Exception ex){
            System.out.println(ex);
        }
        return products;
    }
	    
	    public static int insert(Account product) {
	         
	        try{
	            Class.forName("org.postgresql.Driver").getDeclaredConstructor().newInstance();
	            try (Connection conn = DriverManager.getConnection(url, username, password)){
	                  
	            	  String sql = "INSERT INTO account (mail, password ) Values (?, ?)";
	                try(PreparedStatement preparedStatement = conn.prepareStatement(sql)){
	                	preparedStatement.setString(1, product.getMail());
	                    preparedStatement.setString(2, product.getPassword());
	                      
	                    return  preparedStatement.executeUpdate();
	                }
	            }
	        }
	        catch(Exception ex){
	            System.out.println(ex);
	        }
	        return 0;
	    }
	    
}
