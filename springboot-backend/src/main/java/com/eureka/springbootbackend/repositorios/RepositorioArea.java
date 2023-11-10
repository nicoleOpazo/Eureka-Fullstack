package com.eureka.springbootbackend.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eureka.springbootbackend.modelos.Area;

public interface RepositorioArea extends JpaRepository<Area, Long> {
    
}
