import RegExpStrategy from "../../../interfaces/RegExpStrategy";

export default class NorthAmericaPhoneRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating phone numbers.
	 *
	 * This regular expression accepts North American phone numbers with optional country code (+1), area code, and different separators (space, dot, or hyphen).
	 * @returns {RegExp} The phone number validation regular expression.
	 */
	getPattern(): RegExp {
		return /^(\+1\s?|1)?(\(?[2-9]\d{2}\)?[\s.-]?[2-9]\d{2}[\s.-]?\d{4})$/;
	}

	getErrorMessage(): string {
		return "Veuillez entrer un numéro de téléphone Nord Américain valide (ex: 514-123-4567)";
	}
}
