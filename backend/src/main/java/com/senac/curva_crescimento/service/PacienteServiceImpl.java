package com.senac.curva_crescimento.service;

import com.senac.curva_crescimento.model.Paciente;
import com.senac.curva_crescimento.repository.PacienteRepository;
import com.senac.curva_crescimento.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteServiceImpl implements PacienteService {

    @Autowired
    private PacienteRepository pacienteRepository;
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Paciente cadastrar(Paciente paciente, Long usuarioId) {
    	paciente.setUsuario(usuarioRepository.findById(usuarioId).get());
        return pacienteRepository.save(paciente);
    }

    @Override
    public List<Paciente> buscarPacientes(Long usuarioId) {
        return pacienteRepository.findByUsuarioId(usuarioId);
    }

    @Override
    public Paciente buscarPorId(Long id) {
        return pacienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));
    }

    @Override
    public Paciente editarPorId(Long id, Paciente pacienteEditado) {
        Paciente paciente = pacienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado"));
        paciente.setDataNascimento(pacienteEditado.getDataNascimento());
        paciente.setNome(pacienteEditado.getNome());
        pacienteRepository.save(paciente);
        return paciente;
    }
}

