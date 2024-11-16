<%@ tag language="java" pageEncoding="UTF-8"%>

<%@ attribute name="fahr" type="Double"  %>

<%
	Double ctemp = 5.0/9.0 * (fahr - 32);
	String cstemp = String.format("%.2f", ctemp);
%>

<%=cstemp %>
