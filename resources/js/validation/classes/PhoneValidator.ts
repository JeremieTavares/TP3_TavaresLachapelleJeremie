import Validator from "../interfaces/Validator";
import CountryCodeEnum from "./../../enum/CountryCodeEnum";
import PhoneRegExpFactory from "./regex/factory/PhoneRegExpFactory";

export default class PhoneValidator implements Validator {
	private country: CountryCodeEnum;

	constructor(country: CountryCodeEnum) {
		this.country = country;
	}

	validate(value: string): boolean {
		const pattern = this.getPattern();
		return pattern.test(value);
	}

	getErrorMessage(): string {
		return PhoneRegExpFactory.createRegExp(this.country).getErrorMessage();
	}

	private getPattern(): RegExp {
		return PhoneRegExpFactory.createRegExp(this.country).getPattern();
	}
}
