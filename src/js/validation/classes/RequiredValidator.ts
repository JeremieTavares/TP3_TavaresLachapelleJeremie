import Validator from "./../interfaces/Validator";

export default class RequiredValidator implements Validator {
	validate(value: string): boolean {
		return value.trim().length > 0;
	}

	getErrorMessage(): string {
		return "Ce champ est obligatoire.";
	}
}
