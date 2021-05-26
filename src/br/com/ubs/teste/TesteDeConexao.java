package br.com.ubs.teste;

import java.sql.Connection;
import java.sql.SQLException;

import br.com.ubs.conexao.ConnectionFactory;

public class TesteDeConexao {
	
	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		
		Connection conexao = new ConnectionFactory().getConnection();
		
		System.out.println("Conexão estabelecida");
		
		conexao.close();
		
	}

}
