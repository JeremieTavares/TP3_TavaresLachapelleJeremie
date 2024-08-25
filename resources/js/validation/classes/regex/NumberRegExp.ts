import RegExpStrategy from "../../interfaces/RegExpStrategy";

export default class NumberRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating numbers.
	 *
	 * This regular expression accepts digits (0-9) only.
	 * @returns {RegExp} The number validation regular expression.
	 */
	getPattern(): RegExp {
		return /^[0-9]*$/;
	}

	getErrorMessage(): string {
		return "% ne peut contenir que des chiffres";
	}
}
