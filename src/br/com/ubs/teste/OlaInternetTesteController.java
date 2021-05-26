package br.com.ubs.teste;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class OlaInternetTesteController {
	
	@RequestMapping("/OlaInternet")
	public String execute() {
		System.out.println(" Lógica com Spring!");
		
		return "ok";
	}

}
