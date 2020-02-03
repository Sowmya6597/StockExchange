package com.cts.training.controller;


import java.util.List;

import com.cts.training.dao.RegisterDAO;
import com.cts.training.dao.impl.RegisterDAOImpl;
import com.cts.training.model.Register;

public class RegisterController {

	public static void main(String[] args) {

		Register user = new Register(104, "pavan", "pavan@123", "pavan@cts.com", 24356878L, false);

		RegisterDAO userDAO = new RegisterDAOImpl();

		// creating table
//		boolean status = userDAO.saveUser(user);
//		if (status) {
//			System.out.println("user Saved Successfully");
//		} else {
//			System.out.println("Try Again");
//		}
		
		// updating user
//		Register getUser=userDAO.getUserById(104);
//		getUser.setEnabled(true);
//		getUser.setPassword("pavan@567");		
//		
//		boolean status = userDAO.updateUser(user);
//		if (status) {
//				System.out.println("Updated successfully");
//		}else {
//			System.out.println("Try Again");
//		}
		
		//deleting user
		
//		Register getUser=userDAO.getUserById(105);
//		boolean status = userDAO.deleteUser(getUser);
//		if(status) {
//			System.out.println("Deleted successfully");
//		}else {
//			System.out.println("Try Again");
//		}
		
		List<Register> getUser= userDAO.getAllUsers();
		getUser.forEach(System.out::println);
		

	}

}
