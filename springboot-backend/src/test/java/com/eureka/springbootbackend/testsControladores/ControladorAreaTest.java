package com.eureka.springbootbackend.testsControladores;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.eureka.springbootbackend.controladores.ControladorArea;
import com.eureka.springbootbackend.modelos.Area;
import com.eureka.springbootbackend.servicios.ServicioArea;

@ExtendWith(MockitoExtension.class)
public class ControladorAreaTest {

    @InjectMocks
    private ControladorArea controlador;

    @Mock
    private ServicioArea servicioArea;

    @Test
    public void testGuardarArea() {
        //servicio simulado
        Area area = new Area();
        when(servicioArea.guardarArea(any(Area.class))).thenReturn(area);

        //método del controlador
        ResponseEntity<Area> respuesta = controlador.guardarArea(area);

        //verificar que se haya llamado al servicio con el área correcta
        verify(servicioArea, times(1)).guardarArea(area);

        //verificar que la respuesta sea la esperada
        assertEquals(HttpStatus.CREATED, respuesta.getStatusCode());
        assertEquals(area, respuesta.getBody());
    }

    @Test
    public void testObtenerArea() {
        Long id = 1L;
        Area area = new Area();
        when(servicioArea.obtenerArea(id)).thenReturn(area);

        ResponseEntity<Area> respuesta = controlador.obtenerArea(id);

        verify(servicioArea, times(1)).obtenerArea(id);

        assertEquals(HttpStatus.OK, respuesta.getStatusCode());
        assertEquals(area, respuesta.getBody());
    }

    @Test
    public void testObtenerTodosLasAreasConCantidadPersonas() {
        List<Area> areas = Arrays.asList(new Area(), new Area());
        when(servicioArea.obtenerTodosLasAreas()).thenReturn(areas);

        ResponseEntity<List<Map<String, Object>>> respuesta = controlador.obtenerTodosLasAreasConCantidadPersonas();

        verify(servicioArea, times(1)).obtenerTodosLasAreas();

        assertEquals(HttpStatus.OK, respuesta.getStatusCode());

        List<Map<String, Object>> areasConCantidadPersonas = respuesta.getBody();
        assertNotNull(areasConCantidadPersonas);
        assertEquals(areas.size(), areasConCantidadPersonas.size());
    }
    
}
