package com.cts.training.userservice;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;
import org.springframework.stereotype.Component;
@Entity
@Table(name="registerlist")
@XmlRootElement (name="reg")
public class Register implements Serializable{
	private static final long serialVersionUID = 3274366458219631237L;
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String email;
	private String password;
	private String confirmpassword;
	private String userType="ROLE_USER";
	

	@Transient
	private String regstatus;
	private boolean active=false;
	public Register() {
		super();
	}
	public Register(int id, String name, String email, String password, String confirmpassword) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getRegstatus() {
		return regstatus;
	}
	public void setRegstatus(String regstatus) {
		this.regstatus = regstatus;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
	@Override
	public String toString() {
		return "Register [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", confirmpassword=" + confirmpassword + ", userType=" + userType + ", regstatus=" + regstatus
				+ ", active=" + active + "]";
	}
	
		}