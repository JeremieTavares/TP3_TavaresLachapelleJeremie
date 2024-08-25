import FileValidationStrategy from "../../../interfaces/FileValidationStrategy";

export default class PDFValidationStrategy implements FileValidationStrategy {
	protected errorMessage = `Le fichier PDF "%" fournis est invalide ou corrompu`;

	async validate(file: File): Promise<boolean> {
		const arrayBuffer = await file.slice(0, 4).arrayBuffer();
		const header = new Uint8Array(arrayBuffer);

		// %PDF
		if (!(header[0] === 0x25 && header[1] === 0x50 && header[2] === 0x44 && header[3] === 0x46)) {
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
