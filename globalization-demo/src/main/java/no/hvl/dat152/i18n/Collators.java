/**
 * 
 */
package no.hvl.dat152.i18n;

import java.text.Collator;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

/**
 * @author tdoy
 */
public class Collators {

	// abcdefghijklmnopqrstuvwxyzæøå
	private static String[] chars = {"ø","a","c","å","b","d","y","æ","l","p","m"};
	
	private static List<String> sort_notI18n() {
		
		List<String> to_sort = Arrays.asList(chars);
		Collections.sort(to_sort);
		
		return to_sort;
	}
	
	private static List<String> sort_I18n(){
		
		List<String> to_sort = Arrays.asList(chars);
		Locale locale = new Locale("no", "NO");
		Collator collator = Collator.getInstance(locale);
		Collections.sort(to_sort, collator);
		
		return to_sort;
	}
	
	public static void main(String[] args) {
		
		System.out.println("====Not_i18n===");
		System.out.println(Collators.sort_notI18n());
		System.out.println("");
		System.out.println("====i18n===");
		System.out.println(Collators.sort_I18n());
		
	}
}
