package br.com.ubs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.ubs.dao.EntradaDAO;

@Controller
public class EntradaController {
	
	@RequestMapping("listaEntradas")
	public String listar(Model model) {
		EntradaDAO dao = new EntradaDAO();
		model.addAttribute("entradas", dao.getlistar());
		return "entradas/listar_ubs";
		
	}
	
	


}
