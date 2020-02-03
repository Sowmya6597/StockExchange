package com.cts.project.dao;

import java.util.List;

import com.cts.project.bean.User;

public interface Userdao {
	public boolean addUser(User user);
	public boolean updateUser(User user);
	public boolean deleteUser(User user);
	public User getUserById(int id);
	public List<User> getAllUsers();


}
