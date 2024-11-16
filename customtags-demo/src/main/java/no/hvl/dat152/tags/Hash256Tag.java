/**
 * 
 */
package no.hvl.dat152.tags;

import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

/**
 * @author tdoy
 */
public class Hash256Tag extends SimpleTagSupport {

	private String input;

	/**
	 * @return the input
	 */
	public String getInput() {
		return input;
	}

	/**
	 * @param input the input to set
	 */
	public void setInput(String input) {
		this.input = input;
	}
	
	@Override
	public void doTag() throws IOException {
		
		PageContext pageContext = (PageContext) getJspContext();
		
		JspWriter out = pageContext.getOut();
		
		// print hash value in hex
		try {
			out.println(sha256());
		} catch (NoSuchAlgorithmException | IOException e) {
			//
		}
		
	}
	
	private String sha256() throws NoSuchAlgorithmException {
		
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		byte[] digest = md.digest(input.getBytes());
		
		String hex = new BigInteger(1, digest).toString(16);
		
		return hex;	
	}

}
