import Validator from "../interfaces/Validator";
import EmailRegExp from "./regex/EmailRegExp";

export default class EmailValidator implements Validator {
	private readonly emailPattern = new EmailRegExp().getPattern();

	validate(value: string): boolean {
		return this.emailPattern.test(value);
	}

	getErrorMessage(): string {
		return "Veuillez entrer une adresse e-mail valide.";
	}
}
