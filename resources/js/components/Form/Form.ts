import FormField from "./FormField";
import FormFieldConfig from "../../validation/interfaces/FormFieldConfig";

export default class Form {
	private fields: FormField[] = [];
	private submitCallback: (event: Event, form: HTMLFormElement) => void = () => {};
	private formElement: HTMLFormElement;

	constructor(form: string | HTMLFormElement) {
		this.formElement = typeof form === "string" ? (document.querySelector(form) as HTMLFormElement) : form;

		if (!this.formElement || !(this.formElement instanceof HTMLFormElement)) {
			throw new Error("Form not found");
		}

		if (!this.formElement.hasAttribute("novalidate")) {
			this.formElement.setAttribute("novalidate", "");
		}
	}

	getFormElement(): HTMLFormElement {
		return this.formElement;
	}

	addField(config: FormFieldConfig) {
		const field = new FormField(config);
		this.fields.push(field);
	}

	onSubmit(callback: (event: Event, form: HTMLFormElement) => void) {
		this.submitCallback = callback;
		this.formElement.addEventListener("submit", (event) => this.handleSubmit(event));
	}

	reset() {
		this.formElement.reset();
		this.fields.forEach((field) => {
			field.validate();
		});
	}

	private handleSubmit(event: Event) {
		event.preventDefault();
		let isFormValid = true;

		Promise.all(this.fields.map((field) => field.validate())).then((results) => {
			results.forEach((isValid) => {
				if (!isValid) {
					isFormValid = false;
				}
			});

			if (isFormValid) {
				this.submitCallback(event, this.formElement);
			}
		});
	}
}
