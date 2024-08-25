import RegExpStrategy from "../interfaces/RegExpStrategy";
import Validator from "../interfaces/Validator";

export default class RegexValidator implements Validator {
	private regExp: RegExpStrategy;
	private inputName: string;

	constructor(regExp: RegExpStrategy, inputName: string = "Ce champ") {
		this.regExp = regExp;
		this.inputName = inputName;
	}

	validate(value: string): boolean {
		const pattern = this.getPattern();
		return pattern.test(value);
	}

	getErrorMessage(): string {
		return this.regExp.getErrorMessage().replace("%", this.inputName);
	}

	private getPattern(): RegExp {
		return this.regExp.getPattern();
	}
}
