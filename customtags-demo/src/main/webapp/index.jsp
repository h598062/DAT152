<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="dat152-tag-lib" prefix="dat152" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Custom Tags Demo</title>
</head>
<body>
	<h2><dat152:printHelloWorld/></h2>
	<br>
	<dat152:addCSRFToken />
	<br>	
	<h3>Hash of 'Bergen': <dat152:hashInput input="Bergen"/></h3>
	<br>
	<c:set var="name" value="dat152-students" />
	<h3>Hash of '${name}':<dat152:hashInput input="${name}"/></h3>
	<dat152:styleText borderSize="3" width="600" borderColor="green">
		Students will learn how to design and program complete web applications. 
		There will be a focus on user experience, accessibility, security, architecture 
		and the choice of technology. Different frameworks for developing Web applications will be presented. 
	</dat152:styleText>
</body>
</html>