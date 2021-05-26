<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/fmt" prefix = "fmt" %>


<!DOCTYPE html>
<html>

	<head>
		<meta charset="ISO-8859-1">
		<title>Insert title here</title>
	</head>
	
	<body>
		
		
		<h1> Lista das unidades de São Paulos</h1>
		
		<table>
			<tr>
				<th> lat </th>
				<th> long  </th>
				<th> municipio </th>
				<th> cod_cnes </th>
				<th> nome </th>
				<th> endereço </th>
				<th> bairro </th>
				<th> cidade </th>
				<th> telefone </th>
				<th> size </th>
				<th> adaptation_for_seniors </th>
				<th> medical_equipment </th>
				<th> medicamento </th>
			</tr>
			
			<!--  A ${entradas} está vindo do EntradaController -->
			<c:forEach var="entrada" items="${entradas}">
			<tr>
				<td> ${entrada.lat}</td>
				<td> ${entrada.lng} <td>
				<td> ${entrada.cod_municipio} <td>
				<td> ${entrada.cod_cnes} <td>
				<td> ${entrada.nome } <td>
				<td> ${entrada.endereco } <td>
				<td> ${entrada.bairro } <td>
				<td> ${entrada.cidade} <td>
				<td> ${entrada.telefone} <td>
				<td> ${entrada.defa} <td>
				<td> ${entrada.dadfi} <td>
				<td> ${entrada.equipamento} <td>
				<td> ${entrada.medicamento} <td>
			
			</c:forEach>
		
		</table>

	</body>
	
</html>