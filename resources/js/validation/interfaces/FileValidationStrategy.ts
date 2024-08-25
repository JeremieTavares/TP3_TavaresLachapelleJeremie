export default interface FileValidationStrategy {
	validate(file: File): Promise<boolean>;
	getErrorMessage(): string;
}
