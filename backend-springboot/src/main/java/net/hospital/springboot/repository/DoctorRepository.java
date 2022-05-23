package net.hospital.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.hospital.springboot.model.Doctor;


@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long>{

}
