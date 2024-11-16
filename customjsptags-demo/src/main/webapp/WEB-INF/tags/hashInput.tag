<%@ tag language="java" pageEncoding="UTF-8"%>
<%@ tag import="java.security.MessageDigest" %>
<%@ tag import="java.math.BigInteger" %>

<%@ attribute name="input" type="String" %>


<%
	MessageDigest md = MessageDigest.getInstance("SHA-256");
	byte[] digest = md.digest(input.getBytes());
	
	String hex = new BigInteger(1, digest).toString(16);	
%>
<%=hex %>
