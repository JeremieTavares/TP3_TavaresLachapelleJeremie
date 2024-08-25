import RegExpStrategy from "../../interfaces/RegExpStrategy";

export default class NameRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating names.
	 *
	 * This regular expression accepts letters, hyphens, and periods.
	 * @returns {RegExp} The name validation regular expression.
	 */
	getPattern(): RegExp {
		return /^[A-Za-z-.]+$/;
	}

	getErrorMessage(): string {
		return "% ne peut contenir que des lettres, des tirets et des points";
	}
}
