import Validator from "../interfaces/Validator";
import CountryCode from "./../../enum/CountryCodeEnum";

export default class PhoneValidator implements Validator {
	private country: CountryCode;

	constructor(country: CountryCode) {
		this.country = country;
	}

	validate(value: string): boolean {
		const pattern = this.getPattern();
		return pattern.test(value);
	}

	getErrorMessage(): string {
		switch (this.country) {
			case CountryCode.CANADA:
				return "Veuillez entrer un numéro de téléphone Canadien valide (ex: 514-123-4567)";
			case CountryCode.USA:
				return "Veuillez entrer un numéro de téléphone Américain valide (ex: 555-555-5555)";
			case CountryCode.UK:
				return "Veuillez entrer un numéro de téléphone Anglais valide (ex: 07123 456789)";
			default:
				return `Veuillez entrer un numéro de téléphone valide pour ${this.country}.`;
		}
	}

	private getPattern(): RegExp {
		switch (this.country) {
			case CountryCode.CANADA:
			case CountryCode.USA:
				return /^(?:\+1[-.●]?)?\(?([2-9][0-9]{2})\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/;
			case CountryCode.UK:
				return /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
			default:
				throw new Error(`Country code ${this.country} is not supported.`);
		}
	}
}
