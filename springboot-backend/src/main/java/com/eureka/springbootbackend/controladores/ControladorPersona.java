package com.eureka.springbootbackend.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eureka.springbootbackend.modelos.Area;
import com.eureka.springbootbackend.modelos.Persona;
import com.eureka.springbootbackend.servicios.ServicioArea;
import com.eureka.springbootbackend.servicios.ServicioPersona;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/personas")
@RequiredArgsConstructor
public class ControladorPersona {

    @Autowired
    private ServicioPersona servicioPersona;

    @Autowired
    private ServicioArea servicioArea;

    @PostMapping
    public ResponseEntity<?> guardarPersona(@RequestBody Persona personaConArea) {
        // Verifica si el área especificada existe
        Long areaId = personaConArea.getArea().getId();
        Area area = servicioArea.obtenerArea(areaId);

        if (area == null) {
            return new ResponseEntity<>("El área especificada no existe", HttpStatus.BAD_REQUEST);
        }

        // Asigna el área a la persona
        personaConArea.setArea(area);

        // Guarda la persona en la base de datos
        Persona nuevaPersona = servicioPersona.guardarPersona(personaConArea);

        return new ResponseEntity<>(nuevaPersona, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Persona> obtenerPersona(@PathVariable("id") Long id) {
        Persona persona = servicioPersona.obtenerPersona(id);
        return new ResponseEntity<>(persona, HttpStatus.OK);
    }

    @GetMapping("/listadoPersonas")
    public ResponseEntity<List<Persona>> obtenerTodasLasPersonas() {
        List<Persona> personas = servicioPersona.obtenerTodasLasPersonas();
        return new ResponseEntity<>(personas, HttpStatus.OK);
    }
}
