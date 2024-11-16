/**
 * 
 */
package no.hvl.dat152.i18n;

import java.text.DateFormat;
import java.text.NumberFormat;
import java.util.Date;
import java.util.Locale;

/**
 * @author tdoy
 */
public class Formatters {

	
	// date & time formatters	
	private String formatDate(Locale locale) {
		
		Date currentDate = new Date();
		return DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale).format(currentDate);
	}
	
	// currency formatter	
	private String formatCurrency(Locale locale) {
		
		Double number = 12345.67;
		return NumberFormat.getCurrencyInstance(locale).format(number);
	}
	
	// number formatter	
	private String formatNumber(Locale locale) {
		
		Double number = 12345.67;
		return NumberFormat.getInstance(locale).format(number);
	}
	
	public static void main(String[] args) {
		Formatters form = new Formatters();
		Locale locale = new Locale("no", "NO");
		String number = form.formatNumber(locale);
		String currency = form.formatCurrency(locale);
		String date = form.formatDate(locale);
		System.out.println(number);
		System.out.println(currency);
		System.out.println(date);
	}
}
