package com.cts.training.controller;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.cts.training.dao.CompanyDAO;
import com.cts.training.dao.RegisterDAO;
import com.cts.training.dao.impl.CompanyDAOimpl;
import com.cts.training.dao.impl.RegisterDAOImpl;
import com.cts.training.model.Company;
import com.cts.training.model.Register;
import com.cts.training.model.StockExchange;

public class CompanyController {

	public static void main(String[] args) {
		
		Configuration cfg = new Configuration();
		cfg.configure();
		SessionFactory sessionFactory = cfg.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		
		Company company = new Company(1, "CTS", "Digital ", "Brain", "Tanu", 26537653L);
		
		CompanyDAO companyDAO = new CompanyDAOimpl();
		
		// creating table
//		boolean status = companyDAO.saveCompany(company);
//		if (status) {
//			System.out.println("user Saved Successfully");
//		} else {
//			System.out.println("Try Again");
//		}
		
		// updating company
//		Company getCompany=companyDAO.getCompanyById(1);
//		getCompany.setBod("Abhi");		
//		
//		boolean status = companyDAO.updateCompany(company);
//		if (status) {
//				System.out.println("Updated successfully");
//		}else {
//			System.out.println("Try Again");
//		}
		
		//deleting company
		
//		Company getCompany=companyDAO.getCompanyById(1);
//		boolean status = companyDAO.deleteCompany(getCompany);
//		if(status) {
//			System.out.println("Deleted successfully");
//		}else {
//			System.out.println("Try Again");
//		}
		
		List<Company> getCompany= companyDAO.getAllCompany();
		getCompany.forEach(System.out::println);
		

		transaction.commit();
		session.close();
		
	}

}
