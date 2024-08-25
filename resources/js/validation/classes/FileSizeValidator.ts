import Validator from "../interfaces/Validator";

export class FileSizeValidator implements Validator {
	private maxSize: number;

	constructor(maxSize: number) {
		this.maxSize = maxSize;
	}

	validate(value: File | FileList): boolean {
		if (value instanceof File) {
			return value.size <= this.maxSize;
		} else if (value instanceof FileList) {
			for (let i = 0; i < value.length; i++) {
				if (value[i].size > this.maxSize) {
					return false;
				}
			}
			return true;
		}
		return false;
	}

	getErrorMessage(): string {
		const maxSizeInMB = (this.maxSize / (1024 * 1024)).toFixed(2);
		return `La taille de chaque fichier doit être inférieure à ${maxSizeInMB} MB.`;
	}
}
