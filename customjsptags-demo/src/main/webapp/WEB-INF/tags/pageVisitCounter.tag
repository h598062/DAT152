<%@ tag language="java" pageEncoding="UTF-8"%>

<%
	Integer count = (Integer) application.getAttribute("counter");
	
	if(count == null || count == 0){
		count = 1;
	} else {
		count += 1;
	}
	
	application.setAttribute("counter", count);
%>
You have visited: <b><ins><%=count %></ins></b> times
