import Validator from "./../interfaces/Validator";

export default class EmailValidator implements Validator {
	private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	validate(value: string): boolean {
		return this.emailPattern.test(value);
	}

	getErrorMessage(): string {
		return "Veuillez entrer une adresse e-mail valide.";
	}
}
