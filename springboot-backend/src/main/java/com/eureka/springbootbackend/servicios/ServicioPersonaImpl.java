package com.eureka.springbootbackend.servicios;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eureka.springbootbackend.modelos.Persona;
import com.eureka.springbootbackend.repositorios.RepositorioPersona;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServicioPersonaImpl implements ServicioPersona{

    @Autowired
    private RepositorioPersona repositorioPersona;

    @Override
    @Transactional
    public Persona guardarPersona(Persona persona) {
        persona.setArea(persona.getArea());
        return repositorioPersona.save(persona);
    }

    @Override
    @Transactional
    public Persona obtenerPersona(Long id) {
        return repositorioPersona.findById(id).orElseThrow(() -> new NoSuchElementException("Persona no encontrada"));
    }
    
    @Override
    @Transactional
    public List<Persona> obtenerTodasLasPersonas() {
        return (List<Persona>)repositorioPersona.findAll();
    }
}
