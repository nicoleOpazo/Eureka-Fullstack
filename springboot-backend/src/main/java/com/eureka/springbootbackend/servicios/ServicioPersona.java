package com.eureka.springbootbackend.servicios;

import java.util.List;

import com.eureka.springbootbackend.modelos.Persona;

public interface ServicioPersona {
    public Persona guardarPersona(Persona persona);

    public Persona obtenerPersona(Long id);

    public List<Persona> obtenerTodasLasPersonas();
}
