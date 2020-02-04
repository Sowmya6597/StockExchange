package com.cts.training.controller;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//@WebServlet("/register")
public class Register extends HttpServlet{
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException
	{
	PrintWriter out = response.getWriter();
	String id=request.getParameter("id");
	String firstname = request.getParameter("firstname");
	String lastname = request.getParameter("lastname");
	String email = request.getParameter("email");
	String password1 = request.getParameter("password");
	String repeatpassword = request.getParameter("repeatpassword");
	//String[] course=request.getParameterValues("course");
	Long phone=Long.parseLong(request.getParameter("phone"));
	out.println("id:" +id);
	out.println("firstname: " +firstname);
	out.println("<br>lastname: " +lastname);
	out.println("<br>email: " +email);
	out.println("<br>password: " +password1);
	out.println("<br>repeatpassword: " +repeatpassword);
	out.println("<br> phone:" +phone);
	try {
		Class.forName("com.mysql.jdbc.Driver");
		String url="jdbc:mysql://localhost:3306/cts";
		String username="root"; 
		String password="admin";
		Connection conn=  DriverManager.getConnection(url, username, password);
		System.out.println("Connection Succesfull");
		String query="insert into register values (?,?,?,?,?,?,?)";
		PreparedStatement ps=conn.prepareStatement(query);
		ps.setString(1, id);
		ps.setString(2, firstname);
		ps.setString(3, lastname);
		ps.setString(4, email);
		ps.setString(5, password1);
		ps.setString(6, repeatpassword);
		ps.setLong(7, phone);
		int result=ps.executeUpdate();
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	
	}

}
