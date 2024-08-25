import FileValidationStrategy from "../../../interfaces/FileValidationStrategy";

export default class DOCXValidationStrategy implements FileValidationStrategy {
	protected errorMessage = `Le fichier DOCX "%" fournis est invalide ou corrompu`;

	async validate(file: File): Promise<boolean> {
		const arrayBuffer = await file.slice(0, 4).arrayBuffer();
		const header = new Uint8Array(arrayBuffer);

		// PK (ZIP signature)
		if (!(header[0] === 0x50 && header[1] === 0x4b)) {
			this.setErrorMessage(file.name);
			return false;
		}

		return true;
	}

	protected setErrorMessage(fileName: string): void {
		this.errorMessage = this.errorMessage.replace("%", fileName);
	}

	getErrorMessage(): string {
		return this.errorMessage;
	}
}
