package br.com.ubs.teste;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TesteServlet extends HttpServlet{

	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Chamando a pagina teste.jsp
		RequestDispatcher rd = req.getRequestDispatcher("/teste.jsp");
		rd.forward(req,resp);

			
	}
	
}
