
	package com.cts.project.controller;
	import java.util.List;
	import org.hibernate.Session;
	import org.hibernate.SessionFactory;
	import org.hibernate.Transaction;
	import org.hibernate.cfg.Configuration;

import com.cts.project.bean.User;
	public class UserController {
		public static void main(String[] args) {
			Configuration cfg = new Configuration();
			cfg.configure();
			SessionFactory sessionFactory = cfg.buildSessionFactory();
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			        User user = new User(105, "saikrishna", "123456", "sai@cts.com", 56757567L, true);
			        User user = new User(103, "abc", "abc@123", "abc@cts.com", 9789798789L, true);
					session.save(user);
					User getUser=session.get(User.class, 103);
					//getUser.setEnabled(true);
					//getUser.setPassword("9999");
					//session.update(getUser);
					//session.delete(getUser);
					List<User> users=session.createQuery("from User").list();
					users.forEach(System.out::println);
					transaction.commit();
					session.close();
		}
	}












}
