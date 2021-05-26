package br.com.ubs.model;

public class Entrada {

	private double lat;
	private double lng;
	private int cod_municipio;
	private int cod_cnes;
	private String nome;
	private String endereco;
	private String bairro;
	private String cidade;
	private String telefone;
	private int defa;
	private int dadfi;
	private int equipamento;
	private int medicamento;

	public Entrada() {
	}

	public Entrada(double lat, double lng, int cod_municipio, int cod_cnes, String nome, String endereco, String bairro,
			String cidade, String telefone, int defa, int dadfi, int equipamento, int medicamento) {
		this.lat = lat;
		this.lng = lng;
		this.cod_municipio = cod_municipio;
		this.cod_cnes = cod_cnes;
		this.nome = nome;
		this.endereco = endereco;
		this.bairro = bairro;
		this.cidade = cidade;
		this.telefone = telefone;
		this.defa = defa;
		this.dadfi = dadfi;
		this.equipamento = equipamento;
		this.medicamento = medicamento;

	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLng() {
		return lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public int getCod_municipio() {
		return cod_municipio;
	}

	public void setCod_municipio(int cod_municipio) {
		this.cod_municipio = cod_municipio;
	}

	public int getCod_cnes() {
		return cod_cnes;
	}

	public void setCod_cnes(int cod_cnes) {
		this.cod_cnes = cod_cnes;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public int getDefa() {
		return defa;
	}

	public void setDefa(int defa) {
		this.defa = defa;
	}

	public int getDadfi() {
		return dadfi;
	}

	public void setDadfi(int dadfi) {
		this.dadfi = dadfi;
	}

	public int getEquipamento() {
		return equipamento;
	}

	public void setEquipamento(int equipamento) {
		this.equipamento = equipamento;
	}

	public int getMedicamento() {
		return medicamento;
	}

	public void setMedicamento(int medicamento) {
		this.medicamento = medicamento;
	}
		
	// Método que converte as classificações para numeros.
	// Desempenho mediano ou um pouco abaixo da média -> Largura (46)" classificado: 2
	// Desempenho muito acima da média -> Largura (31)" classificado: 3
	// Desempenho abaixo da média -> Larguea (26)" ~ 30 classificado: 1
	// Desempenho acima da média -> Largura (25)" ~ 24 classificado: 3
	public int classificacao(String nome) {
		int val = 0;
		for (int i = 0; i < nome.length(); i++) {
			val = i;
		}
		
		if(val == 24) {
			return 3;
		}
		else {
			if(val == 30) {
				return 2;
			}
			else {
				return 1;
			}
			
		}
		
	}
 
}
