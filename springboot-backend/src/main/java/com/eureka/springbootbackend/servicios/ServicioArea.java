package com.eureka.springbootbackend.servicios;

import java.util.List;

import com.eureka.springbootbackend.modelos.Area;

public interface ServicioArea {
    public Area guardarArea(Area area);

    public Area obtenerArea(Long id);

    public List<Area> obtenerTodosLasAreas();
}
