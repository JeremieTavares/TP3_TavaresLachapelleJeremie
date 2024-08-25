import RegExpStrategy from "../../interfaces/RegExpStrategy";

export default class AlphaNumericRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating alphanumeric characters.
	 *
	 * This regular expression accepts uppercase and lowercase letters (A-Z, a-z) and digits (0-9).
	 * @returns {RegExp} The alphanumeric validation regular expression.
	 */
	getPattern(): RegExp {
		return /^[a-zA-Z0-9]*$/;
	}

	getErrorMessage(): string {
		return "% ne peut contenir que des lettres et des chiffres";
	}
}
