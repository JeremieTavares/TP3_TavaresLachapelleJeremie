import FileValidationStrategy from "../../../interfaces/FileValidationStrategy";

export default class DOCValidationStrategy implements FileValidationStrategy {
	protected errorMessage = `Le fichier DOC "%" fournis est invalide ou corrompu`;

	async validate(file: File): Promise<boolean> {
		const arrayBuffer = await file.slice(0, 4).arrayBuffer();
		const header = new Uint8Array(arrayBuffer);

		// DOC
		if (!(header[0] === 0xd0 && header[1] === 0xcf && header[2] === 0x11 && header[3] === 0xe0)) {
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
