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
 * 
 */
public class PageVisitCounter extends SimpleTagSupport {
	
	
	@Override
	public void doTag() throws JspException, IOException {
		
		PageContext pgcontext = (PageContext) this.getJspContext();
		
		Integer count = (Integer) pgcontext.getServletContext().getAttribute("counter");
		
		if(count == null || count == 0){
			count = 1;
		} else {
			count += 1;
		}
		
		pgcontext.getServletContext().setAttribute("counter", count);
		
		JspWriter writer = pgcontext.getOut();
		writer.println("You have visited: <b><ins>" + count + "</ins></b> times");
		
	}

}
