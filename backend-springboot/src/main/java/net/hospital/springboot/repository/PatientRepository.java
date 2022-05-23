package net.hospital.springboot.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.hospital.springboot.model.Patient;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{
	
}