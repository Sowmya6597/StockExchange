package com.cts.training.dao;

import java.util.List;

import com.cts.training.model.Register;

public interface RegisterDAO {

	public boolean saveUser(Register user);

	public boolean updateUser(Register user);

	public boolean deleteUser(Register user);

	public Register getUserById(int id);

	public List<Register> getAllUsers();
}
