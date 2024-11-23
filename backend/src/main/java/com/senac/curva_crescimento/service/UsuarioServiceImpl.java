package com.senac.curva_crescimento.service;

import com.senac.curva_crescimento.model.Usuario;
import com.senac.curva_crescimento.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public Usuario cadastrar(Usuario usuario) {
        Optional<Usuario> validaUsuario = usuarioRepository.findByEmail(usuario.getEmail());
        if(validaUsuario.isPresent()){
            throw new RuntimeException("Usuário já cadastrado");
        }
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario login(String email, String senha) {
        return usuarioRepository.findByEmail(email)
                .filter(u -> u.getSenha().equals(senha))
                .orElseThrow(() -> new RuntimeException("Email ou senha inválidos"));
    }
}

