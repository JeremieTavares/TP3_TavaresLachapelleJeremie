import RegExpStrategy from "../../interfaces/RegExpStrategy";

export default class LetterRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating letters.
	 *
	 * This regular expression accepts uppercase and lowercase letters (A-Z, a-z) only.
	 * @returns {RegExp} The letter validation regular expression.
	 */
	getPattern(): RegExp {
		return /^[a-zA-Z]*$/;
	}

	getErrorMessage(): string {
		return "% ne peut contenir que des lettres";
	}
}
