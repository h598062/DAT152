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
public class FahrToCelcius extends SimpleTagSupport {
	
	private Double fahr;
	
	@Override
	public void doTag() throws JspException, IOException {
		
		PageContext pageContext = (PageContext) this.getJspContext();
		JspWriter writer = pageContext.getOut();
		
		Double ctemp = 5.0/9.0 * (fahr - 32);
		String cstemp = String.format("%.2f", ctemp);
		
		writer.println(cstemp);
		
	}

	/**
	 * @return the fahr
	 */
	public Double getFahr() {
		return fahr;
	}

	/**
	 * @param fahr the fahr to set
	 */
	public void setFahr(Double fahr) {
		this.fahr = fahr;
	}

}
