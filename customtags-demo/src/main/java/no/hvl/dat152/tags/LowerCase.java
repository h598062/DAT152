package no.hvl.dat152.tags;

import java.io.IOException;
import java.io.StringWriter;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.JspWriter;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.JspFragment;
import jakarta.servlet.jsp.tagext.SimpleTagSupport;

/**
 * Tag that transforms the body text to lowercase characters.
 *
 * @author Atle Geitung
 */
public class LowerCase extends SimpleTagSupport {

    @Override
    public final void doTag() throws JspException, IOException {

        PageContext pageContext = (PageContext) getJspContext();
        JspWriter out = pageContext.getOut();

        StringWriter stringWriter = new StringWriter();
        JspFragment body = getJspBody();
        body.invoke(stringWriter);
        String bodyText = stringWriter.getBuffer().toString();
        out.println(bodyText.toLowerCase());
    }

}
