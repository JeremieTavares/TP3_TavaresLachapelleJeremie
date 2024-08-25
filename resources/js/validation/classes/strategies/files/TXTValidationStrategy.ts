import FileValidationStrategy from "../../../interfaces/FileValidationStrategy";

export default class TXTValidationStrategy implements FileValidationStrategy {
	protected errorMessage = `Le fichier TXT "%" fournis est invalide ou corrompu`;

	async validate(file: File): Promise<boolean> {
		// TXT files don't have a specific signature, assume valid
		return true;
	}

	protected setErrorMessage(fileName: string): void {
		this.errorMessage = this.errorMessage.replace("%", fileName);
	}

	getErrorMessage(): string {
		return this.errorMessage;
	}
}
