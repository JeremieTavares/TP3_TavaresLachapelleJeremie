export type FileUploadOptions = {
	dropzoneId: string;
	inputId: string;
	filenameId: string;
	defaultText?: string;
};

export default class DropzoneFileHelper {
	private dropzone: HTMLElement;
	private input: HTMLInputElement;
	private filenameDisplay: HTMLElement;
	private defaultText: string;

	constructor({ dropzoneId, inputId, filenameId, defaultText }: FileUploadOptions) {
		this.dropzone = this.getElement(dropzoneId) as HTMLElement;
		this.input = this.getElement(inputId) as HTMLInputElement;
		this.filenameDisplay = this.getElement(filenameId) as HTMLElement;
		this.defaultText = defaultText || this.filenameDisplay.textContent || "Drop files here or click to select";
		this.initEventListeners();
	}

	private getElement(id: string): HTMLElement | null {
		const element = document.getElementById(id);
		if (!element) {
			throw new Error(`Element with ID ${id} not found.`);
		}
		return element;
	}

	private handleFileSelect(): void {
		if (this.input.files && this.input.files.length > 0) {
			this.filenameDisplay.textContent = this.input.files[0].name;
		} else {
			this.filenameDisplay.textContent = this.defaultText;
		}
	}

	private initEventListeners(): void {
		this.dropzone.addEventListener("click", () => this.input.click());

		this.input.addEventListener("change", () => this.handleFileSelect());

		this.dropzone.addEventListener("dragover", (e: DragEvent) => {
			e.preventDefault();
			this.dropzone.classList.add("border-red");
		});

		this.dropzone.addEventListener("dragleave", () => {
			this.dropzone.classList.remove("border-red");
		});

		this.dropzone.addEventListener("drop", (e: DragEvent) => {
			e.preventDefault();
			this.dropzone.classList.remove("border-red");
			if (e.dataTransfer?.files) {
				this.input.files = e.dataTransfer.files;
				this.handleFileSelect();
			}
		});
	}
}
