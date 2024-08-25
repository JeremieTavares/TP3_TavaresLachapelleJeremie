import RegExpStrategy from "../../../interfaces/RegExpStrategy";

export default class FrancePhoneRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating phone numbers.
	 *
	 * This regular expression accepts North American phone numbers with optional country code (+1), area code, and different separators (space, dot, or hyphen).
	 * @returns {RegExp} The phone number validation regular expression.
	 */
	getPattern(): RegExp {
		return /^(\+33\s?|0)?[1-9](\d{2}){4}$/;
	}

	getErrorMessage(): string {
		return "Veuillez entrer un numéro de téléphone francais valide (ex: 07 12 34 56 78)";
	}
}
