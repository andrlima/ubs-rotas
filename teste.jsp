<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>JSP</title>
	</head>
	<body>
	
		<h1>P�gina teste JSP</h1>
		<%-- coment�rio em JSP aqui: nossa primeira p�gina JSP --%>
		<%	String mensagem = "Bem vindo, essa � uma p�gina teste "; %>
		
		<% out.println(mensagem);%>
		
		<br />
		<% String desenvolvido = "Desenvolvido por (L�o Ara�jo)"; %>
		
		<%= desenvolvido %>
		<br />
		
		<% System.out.println("Tudo foi executado!"); %>
		
	</body>
	
</html>