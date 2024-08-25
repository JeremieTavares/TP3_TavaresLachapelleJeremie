import FileValidationStrategy from "../interfaces/FileValidationStrategy";
import FileFormatEnum from "../enum/FileFormatEnum";
import Validator from "../interfaces/Validator";
import DOCValidationStrategy from "./strategies/files/DOCValidationStrategy";
import DOCXValidationStrategy from "./strategies/files/DOCXValidationStrategy";
import PDFValidationStrategy from "./strategies/files/PDFValidationStrategy";
import TXTValidationStrategy from "./strategies/files/TXTValidationStrategy";

export class FileFormatValidator implements Validator {
	private allowedStrategies: Map<FileFormatEnum, FileValidationStrategy>;
	private errorMessages: Array<string>;

	constructor(allowedFormats: FileFormatEnum[]) {
		this.allowedStrategies = new Map();
		this.errorMessages = new Array();

		// Initialize the strategies for the allowed formats
		allowedFormats.forEach((format) => {
			switch (format) {
				case FileFormatEnum.PDF:
					this.allowedStrategies.set(FileFormatEnum.PDF, new PDFValidationStrategy());
					break;
				case FileFormatEnum.DOC:
					this.allowedStrategies.set(FileFormatEnum.DOC, new DOCValidationStrategy());
					break;
				case FileFormatEnum.DOCX:
					this.allowedStrategies.set(FileFormatEnum.DOCX, new DOCXValidationStrategy());
					break;
				case FileFormatEnum.TXT:
					this.allowedStrategies.set(FileFormatEnum.TXT, new TXTValidationStrategy());
					break;
			}
		});
	}

	async validate(value: File | FileList): Promise<boolean> {
		this.errorMessages = [];
		if (value instanceof File) return await this.validateFile(value);
		else if (value instanceof FileList) {
			for (let i = 0; i < value.length; i++) {
				if (!(await this.validateFile(value[i]))) return false;
			}
			return true;
		}
		return false;
	}

	private async validateFile(file: File): Promise<boolean> {
		const fileExtension = file.name.split(".").pop()?.toLowerCase() as FileFormatEnum;

		const strategy = this.allowedStrategies.get(fileExtension);
		if (!strategy) return false;

		const isValid = await strategy.validate(file);

		if (!isValid) {
			this.errorMessages.push(strategy.getErrorMessage());
		}

		return isValid;
	}

	getErrorMessage(): string {
		const allowedFileTypes = Array.from(this.allowedStrategies.keys()).join(", ");
		const defaultMessage = `Le fichier doit être dans l'un des formats suivants : ${allowedFileTypes}. Veuillez également vérifier que le fichier est correct et non corrompu.`;
		return this.errorMessages.join(", ") || defaultMessage;
	}
}
