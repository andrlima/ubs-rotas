package br.com.ubs.teste;

import java.util.List;

import br.com.ubs.dao.EntradaDAO;
import br.com.ubs.model.Entrada;

public class TesteListar {
	
	public static void main(String[] args) {
		
		EntradaDAO dao = new EntradaDAO();
		
		List<Entrada> entradas = dao.getlistar();
		
		int qtd = 0; //12
		
		for(Entrada entrada : entradas) {
			
			//// Aqui a conversão aqui.
	
			entrada.getMedicamento();
			
			qtd++;
			
			System.out.println(qtd + ":Medicamentos: " + entrada.getMedicamento());
			
			
		}
		
		
	}

}
