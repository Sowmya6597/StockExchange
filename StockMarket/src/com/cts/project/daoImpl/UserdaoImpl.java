package com.cts.project.daoImpl;
import com.cts.project.bean.User;
import com.cts.project.dao.Userdao;
import com.cts.project.hibernate.HibernateUtil;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
public class UserdaoImpl implements Userdao {
	 SessionFactory sessionFactory=HibernateUtil.getSessionFactory();
		@Override
		public boolean addUser(User user) {
			// TODO Auto-generated method stub
			try {
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				session.save(user);
				tx.commit();
				session.close();
				return true;
			} catch (HibernateException e) {
				e.printStackTrace();
				return false;
			}
		}
		@Override
		public boolean deleteUser(User user) {
			try {
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				session.delete(user);
				tx.commit();
				session.close();
				return true;
			} catch (HibernateException e) {
				e.printStackTrace();
				return false;
			}
		}
		@Override
		public boolean updateUser(User user) {
			try {
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				session.update(user);
				tx.commit();
				session.close();
				return true;
			} catch (HibernateException e) {
				e.printStackTrace();
				return false;
			}
		}
		@Override
		public User getUserById(int id) {
			try {
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				User user = session.get(User.class, id);
				tx.commit();
				session.close();
				return user;
			} catch (HibernateException e) {
				e.printStackTrace();
				return null;
			}
		}
		@Override
		public List<User> getAllUsers() {
			try {
				Session session = sessionFactory.openSession();
				Transaction tx = session.beginTransaction();
				List<User> users = session.createQuery("from User").list();
				tx.commit();
				session.close();
				return users;
			} catch (HibernateException e) {
				e.printStackTrace();
				return null;
			}
		}

}
