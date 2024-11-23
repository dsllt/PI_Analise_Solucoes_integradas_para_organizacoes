package com.senac.curva_crescimento.repository;

import com.senac.curva_crescimento.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    List<Paciente> findByUsuarioId(Long usuarioId);
}
