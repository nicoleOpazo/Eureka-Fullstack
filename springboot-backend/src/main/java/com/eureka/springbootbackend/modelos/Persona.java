package com.eureka.springbootbackend.modelos;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String email;

    @ManyToOne
    @JoinColumn(name="area_id")
    @JsonBackReference
    private Area area;

    public void setArea(Area area) {
        this.area = area;
        area.getPersonas().add(this);
    }
}
