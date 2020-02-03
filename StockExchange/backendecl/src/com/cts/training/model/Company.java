package com.cts.training.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Company implements Serializable{

	private static final long serialVersionUID = -6721988738619310856L;
	@Id
	private int id;
	private String companyname;
	private String sector;
	private String ceo;
	private String bod;
	private double turnOver;
	
	public Company() {
	}

	public Company(int id, String companyname, String sector, String ceo, String bod, double turnOver) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.sector = sector;
		this.ceo = ceo;
		this.bod = bod;
		this.turnOver = turnOver;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getBod() {
		return bod;
	}

	public void setBod(String bod) {
		this.bod = bod;
	}

	public double getTurnOver() {
		return turnOver;
	}

	public void setTurnOver(double turnOver) {
		this.turnOver = turnOver;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", companyname=" + companyname + ", sector=" + sector + ", ceo=" + ceo + ", bod="
				+ bod + ", turnOver=" + turnOver + "]";
	}



}
