/**
 * 
 */
package no.hvl.dat152.tags;

import java.io.IOException;
import java.security.SecureRandom;

import org.apache.tomcat.util.codec.binary.Base64;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

/**
 * @author tdoy
 */
public class CSRFTokenTag extends SimpleTagSupport {

	@Override
	public void doTag() throws JspException, IOException {
		
		PageContext pageContext = (PageContext) getJspContext();
		
		// get what we need from the page
		HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();
		HttpSession session = ((HttpServletRequest)request).getSession();
		
		// check if we already have a token
		String token = (String) session.getAttribute("csrftoken");
		// if server does not have this token, then generate a new token
		if(token == null) 
			token = generateCSRFToken(request);

		// start building up the tag
		JspWriter out = pageContext.getOut();
		out.println();
		out.println("<input type=\"hidden\" name=\"csrftoken\" value=\""+ token + "\"/>");
		
	}
	
	private String generateCSRFToken(HttpServletRequest request) {
		SecureRandom sr = new SecureRandom();
		byte[] csrf = new byte[16];
		sr.nextBytes(csrf);
		String token = Base64.encodeBase64URLSafeString(csrf);
		request.getSession().setAttribute("csrftoken", token);
		
		return token;
	}

}
