export default interface Validator {
	validate(value: string): boolean;
	getErrorMessage(): string;
}
