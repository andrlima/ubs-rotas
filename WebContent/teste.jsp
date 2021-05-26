<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>JSP</title>
	</head>
	<body>
	
		<h1>Página teste JSP</h1>
		<%-- comentário em JSP aqui: nossa primeira página JSP --%>
		<%	String mensagem = "Bem vindo, essa é uma página teste "; %>
		
		<% out.println(mensagem);%>
		
		<br />
		<% String desenvolvido = "Desenvolvido por (Léo Araújo)"; %>
		
		<%= desenvolvido %>
		<br />
		
		<% System.out.println("Tudo foi executado!"); %>
		
	</body>
	
</html>