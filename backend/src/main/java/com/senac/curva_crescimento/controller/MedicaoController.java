package com.senac.curva_crescimento.controller;

import com.senac.curva_crescimento.model.Medicao;
import com.senac.curva_crescimento.repository.MedicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicoes")
public class MedicaoController {

    @Autowired
    private MedicaoRepository medicaoRepository;

    @PostMapping
    public Medicao cadastrar(@RequestBody Medicao medicao) {
        return medicaoRepository.save(medicao);
    }

    @GetMapping
    public List<Medicao> buscarPorPaciente(@RequestParam Long pacienteId) {
        return medicaoRepository.findByPacienteId(pacienteId);
    }
}

