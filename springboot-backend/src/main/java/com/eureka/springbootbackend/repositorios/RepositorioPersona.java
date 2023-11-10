package com.eureka.springbootbackend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eureka.springbootbackend.modelos.Persona;

public interface RepositorioPersona extends JpaRepository<Persona, Long> {
    
}
