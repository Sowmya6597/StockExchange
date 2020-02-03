package com.cts.project.bean;
	public class User {
		private int id;
		private String firstname;
		private String lastname;
		private String email;
		private String password;
		private String repeatpassword;
		private long phone;
		public User(int id, String firstname, String lastname, String email, String password, String repeatpassword,
				long phone) {
			super();
			this.id = id;
			this.firstname = firstname;
			this.lastname = lastname;
			this.email = email;
			this.password = password;
			this.repeatpassword = repeatpassword;
			this.phone = phone;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getFirstname() {
			return firstname;
		}
		public void setFirstname(String firstname) {
			this.firstname = firstname;
		}
		public String getLastname() {
			return lastname;
		}
		public void setLastname(String lastname) {
			this.lastname = lastname;
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
		public String getRepeatpassword() {
			return repeatpassword;
		}
		public void setRepeatpassword(String repeatpassword) {
			this.repeatpassword = repeatpassword;
		}
		public long getPhone() {
			return phone;
		}
		public void setPhone(long phone) {
			this.phone = phone;
		}
		@Override
		public String toString() {
			return "User [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
					+ ", password=" + password + ", repeatpassword=" + repeatpassword + ", phone=" + phone + "]";
		}
		
		

}
