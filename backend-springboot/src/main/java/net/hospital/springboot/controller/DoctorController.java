package net.hospital.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.hospital.springboot.model.Doctor;
import net.hospital.springboot.model.Patient;
import net.hospital.springboot.repository.DoctorRepository;


@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/api/v1/")
public class DoctorController {
	@Autowired
	private DoctorRepository doctorRepository;
	
	//get all doctors
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return doctorRepository.findAll();
	}
	//create doctor rest api
	
	@PostMapping("/doctors")
	public Doctor createDoctor(@RequestBody Doctor doctor) {
		return doctorRepository.save(doctor);
	}
}
