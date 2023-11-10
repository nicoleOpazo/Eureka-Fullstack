package com.eureka.springbootbackend.controladores;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.eureka.springbootbackend.servicios.ServicioArea;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/areas")
@RequiredArgsConstructor
public class ControladorArea {

    @Autowired
    private ServicioArea servicioArea;

    @PostMapping
    public ResponseEntity<Area> guardarArea(@RequestBody Area area) {
        Area nuevaArea = servicioArea.guardarArea(area);
        return new ResponseEntity<>(nuevaArea, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Area> obtenerArea(@PathVariable("id") Long id) {
        Area area = servicioArea.obtenerArea(id);
        return new ResponseEntity<>(area, HttpStatus.OK);
    }

    @GetMapping("/listadoAreas")
    public ResponseEntity<List<Map<String, Object>>> obtenerTodosLasAreasConCantidadPersonas() {
        List<Area> areas = servicioArea.obtenerTodosLasAreas();

        List<Map<String, Object>> areasConCantidadPersonas = new ArrayList<>();
        for (Area area : areas) {
            Map<String, Object> areaInfo = new HashMap<>();
            areaInfo.put("id", area.getId());
            areaInfo.put("nombre", area.getNombre());
            areaInfo.put("cantidadPersonas", area.getPersonas().size());
            areasConCantidadPersonas.add(areaInfo);
        }

        return new ResponseEntity<>(areasConCantidadPersonas, HttpStatus.OK);
    }

    /*@GetMapping("/{id}/numeroPersonas")
    public ResponseEntity<Long> obtenerNumeroDePersonasPorArea(@PathVariable("id") Long id) {
        // Obtener el área por ID
        Area area = servicioArea.obtenerArea(id);
        // Obtener el número de personas asociadas a ese área
        Long numeroDePersonas = (long) area.getPersonas().size();

        return new ResponseEntity<>(numeroDePersonas, HttpStatus.OK);
    }*/

}
