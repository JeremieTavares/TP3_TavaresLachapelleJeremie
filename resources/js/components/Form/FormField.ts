import SelectorType from "../../validation/enum/SelectorTypeEnum";
import FormFieldConfig from "../../validation/interfaces/FormFieldConfig";
import Validator from "../../validation/interfaces/Validator";

export default class FormField {
	private element: HTMLElement;
	private errorElement: HTMLElement;
	private validators: Validator[];
	private event: string;
	private static DEFAULT_SELECTOR_TYPE = SelectorType.ID;
	static readonly ERROR_CLASSES = ["border-red-300"];

	constructor(config: FormFieldConfig) {
		this.element = this.getElement(config.selector, config.selectorType || FormField.DEFAULT_SELECTOR_TYPE);
		this.errorElement = this.getElement(
			config.errorSelector,
			config.errorSelectorType || FormField.DEFAULT_SELECTOR_TYPE
		);
		this.validators = config.validator instanceof Array ? config.validator : [config.validator];
		console.log(config.selector, config.event, config.event || this.handleNoEvent());
		this.event = config.event || this.handleNoEvent();

		this.attachEvent();
	}

	private handleNoEvent(): string {
		switch (this.element.getAttribute("type")) {
			case "text":
			case "email":
			case "password":
			case "number":
			case "textarea":
				return "input";
			case "checkbox":
			case "radio":
			case "select":
			case "select-one":
			case "select-multiple":
			case "file":
				return "change";
			default:
				return "input";
		}
	}

	private getElement(selector: string | HTMLElement, type: SelectorType): HTMLElement {
		if (typeof selector === "string") {
			switch (type) {
				case SelectorType.NAME:
					return document.querySelector(`[name="${selector}"]`) as HTMLElement;
				case SelectorType.ID:
					return document.getElementById(selector) as HTMLElement;
				case SelectorType.DATA:
					return document.querySelector(`[data-${selector}]`) as HTMLElement;
				default:
					throw new Error("Invalid selector type");
			}
		} else {
			return selector;
		}
	}

	private attachEvent() {
		this.element.addEventListener(this.event, () => this.validate());
	}

	async validate(): Promise<boolean> {
		let value: any;
		let isValid = true;

		// Determine the value based on the input type
		if ((this.element as HTMLInputElement).type === "file") {
			// Handle file input
			const files = (this.element as HTMLInputElement).files;
			if (files && files.length > 0) {
				// If multiple files are allowed, pass the FileList to the validators
				value = files.length === 1 ? files[0] : files;
			} else {
				value = null;
			}
		} else if (
			(this.element as HTMLInputElement).type === "checkbox" ||
			(this.element as HTMLInputElement).type === "radio"
		) {
			// Handle checkbox or radio input using the checked property
			value = (this.element as HTMLInputElement).checked;
		} else if ((this.element as HTMLSelectElement).tagName.toLowerCase() === "select") {
			// Handle select input
			value = (this.element as HTMLSelectElement).value;
		} else {
			// Handle text, email, password, etc.
			value = (this.element as HTMLInputElement).value;
		}

		// Validate the value using the provided validators
		for (const validator of this.validators) {
			const isValidValue = await validator.validate(value);
			if (!isValidValue) {
				this.errorElement.textContent = validator.getErrorMessage();
				this.errorElement.classList.remove("hidden");
				this.element.classList.add(...FormField.ERROR_CLASSES);
				isValid = false;
				break;
			}
		}

		if (isValid) {
			this.errorElement.classList.add("hidden");
			this.element.classList.remove(...FormField.ERROR_CLASSES);
		}

		return isValid;
	}

	reset() {
		(this.element as HTMLInputElement).value = "";
		this.errorElement.textContent = "";
		this.errorElement.classList.add("hidden");
	}
}
