package br.com.ubs.conexao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

	public Connection getConnection() throws SQLException {

		String driver = "com.mysql.cj.jdbc.Driver";
		String enderecoDoBanco = "localhost/";
		String nomeDoBanco = "ubs";
		String usuario = "root";
		String senha = "12345";
		String url = "jdbc:mysql://" + enderecoDoBanco + nomeDoBanco;

		try {
			Class.forName(driver);
			return DriverManager.getConnection(url, usuario, senha);

		}
		catch (ClassNotFoundException e) {
			throw new SQLException(e);

		}

	}

}
