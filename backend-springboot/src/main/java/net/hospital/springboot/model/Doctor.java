package net.hospital.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name =  "doctors")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long id;
	@Column(name="d_name")
	private String name;
	@Column(name="d_spec")
	private String specialization;
	@Column(name="d_number")
	private int numberOfPatientAttended;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public int getNumberOfPatientAttended() {
		return numberOfPatientAttended;
	}
	public void setNumberOfPatientAttended(int numberOfPatientAttended) {
		this.numberOfPatientAttended = numberOfPatientAttended;
	}
	public Doctor(String name, String specialization, int numberOfPatientAttended) {
		super();
		this.name = name;
		this.specialization = specialization;
		this.numberOfPatientAttended = numberOfPatientAttended;
	}
	public Doctor() {
		
	}
	
}
