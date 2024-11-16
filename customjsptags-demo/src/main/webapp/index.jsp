<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib tagdir="/WEB-INF/tags" prefix="dat152" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Custom Tags Demo</title>
</head>
<body>
	<h2><dat152:printHelloWorld/></h2>

	<br>	
	<h3>Hash of 'Tosin': <dat152:hashInput input="Tosin"/></h3>
	<br>
	
	<c:set var="name" value="dat152-students" />
	<h3>Hash of '${name}':<dat152:hashInput input="${name}"/></h3>
	
	<dat152:styleText borderSize="1" width="700" borderColor="red">
		Students will learn how to design and program complete web applications. 
		There will be a focus on user experience, accessibility, security, architecture 
		and the choice of technology. Different frameworks for developing Web applications will be presented. 
	</dat152:styleText>

</body>
</html>