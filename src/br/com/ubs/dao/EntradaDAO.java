package br.com.ubs.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.ubs.conexao.ConnectionFactory;
import br.com.ubs.model.Entrada;

public class EntradaDAO {
	
	private Connection connection;
	
	//Contrutor
	public EntradaDAO() {
		try {
			this.connection = new ConnectionFactory().getConnection();
		} 
		catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
	//Listadagem dos dados
	public List<Entrada> getlistar(){
		
		String sql = "SELECT * FROM dados WHERE dsc_cidade = 'São Paulo'";
	   //String sql = "SELECT * FROM dados";
		
		try {
			List<Entrada> entradas = new ArrayList<Entrada>();
			
			PreparedStatement stmt = this.connection.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			
			while(rs.next()) {
				
				Entrada entrada = new Entrada();
				
				entrada.setLat(rs.getDouble("vlr_latitude"));
				entrada.setLng(rs.getDouble("vlr_longitude"));
				entrada.setCod_municipio(rs.getInt("cod_munic"));
				entrada.setCod_cnes(rs.getInt("cod_cnes"));
				entrada.setNome(rs.getString("nom_estab"));
				entrada.setEndereco(rs.getString("dsc_endereco"));
				entrada.setBairro(rs.getString("dsc_bairro"));
				entrada.setCidade(rs.getString("dsc_cidade"));
				entrada.setTelefone(rs.getString("dsc_telefone"));
				
				// Variáveis que serão convertidas para valores classificatório
				// <- : Sentido da leitura.
				// imprime o resultado <- insere a conversão <- converte o rs  <- resultado  <- pega a String <- banco
				entrada.setDefa(entrada.classificacao(rs.getString("dsc_estrut_fisic_ambiencia")));
				entrada.setDadfi(entrada.classificacao(rs.getString("dsc_adap_defic_fisic_idosos")));
				entrada.setEquipamento(entrada.classificacao(rs.getString("dsc_equipamentos")));
				entrada.setMedicamento(entrada.classificacao(rs.getString("dsc_medicamentos")));
				
			
				entradas.add(entrada);
	
			}
			
			rs.close();
			stmt.close();
			
			return entradas;
				
		}
		catch(SQLException e) {
			throw new RuntimeException(e);
			
		}
			
	}
	
	

	 
		
}









