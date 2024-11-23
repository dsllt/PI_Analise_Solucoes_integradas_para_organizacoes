package com.senac.curva_crescimento.service;

import com.senac.curva_crescimento.model.Paciente;

import java.util.List;

public interface PacienteService {
    Paciente cadastrar(Paciente paciente, Long usuarioId);
    List<Paciente> buscarPacientes(Long usuarioId);
    Paciente buscarPorId(Long id);
}
