import Validator from "../interfaces/Validator";

export class CheckedValidator implements Validator {
	validate(value: string): boolean {
		return !!value;
	}

	getErrorMessage(): string {
		return "Ce champ doit être coché.";
	}
}
