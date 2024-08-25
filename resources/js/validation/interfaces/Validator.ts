export default interface Validator {
	validate(value: any): boolean | Promise<boolean>;
	getErrorMessage(): string;
}
