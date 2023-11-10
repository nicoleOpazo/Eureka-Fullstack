package com.eureka.springbootbackend.servicios;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eureka.springbootbackend.modelos.Area;
import com.eureka.springbootbackend.repositorios.RepositorioArea;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ServicioAreaImpl implements ServicioArea{

    @Autowired
    private RepositorioArea repositorioArea;

    @Override
    @Transactional
    public Area guardarArea(Area area) {
        return repositorioArea.save(area);
    }

    @Override
    @Transactional
    public Area obtenerArea(Long id) {
        return repositorioArea.findById(id).orElseThrow(() -> new NoSuchElementException("Área no encontrada"));
    }

    @Override
    @Transactional
    public List<Area> obtenerTodosLasAreas() {
        return (List<Area>)repositorioArea.findAll();
    }
    
}
