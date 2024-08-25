import RegExpStrategy from "../../interfaces/RegExpStrategy";

export default class EmailRegExp implements RegExpStrategy {
	/**
	 * Returns a regular expression for validating email addresses.
	 *
	 * This regular expression adheres to the standard RFC 5322 format.
	 * @returns {RegExp} The email validation regular expression.
	 */
	getPattern(): RegExp {
		return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	}

	getErrorMessage(): string {
		return "% doit être une adresse email valide";
	}
}
