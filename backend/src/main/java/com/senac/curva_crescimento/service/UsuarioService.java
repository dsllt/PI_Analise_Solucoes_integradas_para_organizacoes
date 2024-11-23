package com.senac.curva_crescimento.service;

import com.senac.curva_crescimento.model.Usuario;

public interface UsuarioService {
    Usuario cadastrar(Usuario usuario);
    Usuario login(String email, String senha);
}

