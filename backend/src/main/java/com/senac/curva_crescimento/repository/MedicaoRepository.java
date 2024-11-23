package com.senac.curva_crescimento.repository;

import com.senac.curva_crescimento.model.Medicao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MedicaoRepository extends JpaRepository<Medicao, Long> {
    List<Medicao> findByPacienteId(Long pacienteId);
}
