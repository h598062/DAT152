/**
 * 
 */
package no.hvl.dat152.tags;

import java.io.IOException;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

/**
 * @author tdoy
 */
public class HelloWorldTag extends SimpleTagSupport {
	
	@Override
	public void doTag() throws JspException, IOException {
		
		PageContext pageContext = (PageContext) getJspContext();
		
		JspWriter out = pageContext.getOut();
		
		out.println("Hello World");
	}
}
