package com.senac.curva_crescimento.controller;

import com.senac.curva_crescimento.model.Paciente;
import com.senac.curva_crescimento.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService pacienteService;

    @PostMapping("/cadastrar")
    public Paciente cadastrar(@RequestBody Paciente paciente, @RequestParam Long usuarioId) {
        return pacienteService.cadastrar(paciente, usuarioId);
    }

    @GetMapping
    public List<Paciente> buscarPacientes(@RequestParam Long usuarioId) {
        return pacienteService.buscarPacientes(usuarioId);
    }

    @GetMapping("/{id}")
    public Paciente buscarPorId(@PathVariable Long id) {
        return pacienteService.buscarPorId(id);
    }
}

