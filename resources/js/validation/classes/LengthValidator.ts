import Validator from "../interfaces/Validator";

export class LengthValidator implements Validator {
	private min: number;
	private max: number;

	constructor(min: number, max: number) {
		this.min = min;
		this.max = max;
	}

	validate(value: string): boolean {
		const length = value.trim().length;
		return length >= this.min && length <= this.max;
	}

	getErrorMessage(): string {
		return `La longueur du texte doit être comprise entre ${this.min} et ${this.max} caractères.`;
	}
}
