package net.hospital.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.hospital.springboot.model.Patient;
import net.hospital.springboot.repository.PatientRepository;




@RestController
@CrossOrigin(origins= "http://localhost:4200")
@RequestMapping("/api/v1/")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;
	
	//get all patients
	
	@GetMapping("/patients")
	public List<Patient> getAllPatients(){
		return patientRepository.findAll();
	}
	//create employee rest api
	
		@PostMapping("/patients")
		public Patient createEmployee(@RequestBody Patient patient) {
			return patientRepository.save(patient);
		}
}
