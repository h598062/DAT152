/**
 * 
 */
package no.hvl.dat152.i18n;

import java.util.Locale;
import java.util.ResourceBundle;

/**
 * @author tdoy
 * Source - https://docs.oracle.com/javase/tutorial/i18n/intro/after.html
 */
public class I18nSample {

	static public void main(String[] args) {
		
		String language;
		String country;
		
//		Locale locale = Locale.getDefault();
//		System.out.println(locale.getLanguage());
		
		if(args.length != 2) {
			language = new String("no");
			country = new String("NO");
		} else {
			language = new String(args[0]);
			country = new String(args[1]);
		}
		
		Locale currentLocale = new Locale(language, country);
		
		ResourceBundle messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);
		System.out.println(messages.getString("greetings"));
		System.out.println(messages.getString("inquiry"));		
		System.out.println(messages.getString("farewell"));
	}
}
