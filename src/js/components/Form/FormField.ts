import SelectorType from "../../validation/enum/SelectorTypeEnum";
import FormFieldConfig from "./FormFieldConfig";
import Validator from "../../validation/interfaces/Validator";

export default class FormField {
	private element: HTMLElement;
	private errorElement: HTMLElement;
	private validators: Validator[];
	private event: string;
	private static DEFAULT_SELECTOR_TYPE = SelectorType.ID;

	constructor(config: FormFieldConfig) {
		this.element = this.getElement(config.selector, config.selectorType || FormField.DEFAULT_SELECTOR_TYPE);
		this.errorElement = this.getElement(
			config.errorSelector,
			config.errorSelectorType || FormField.DEFAULT_SELECTOR_TYPE
		);
		this.validators = config.validator instanceof Array ? config.validator : [config.validator];
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

	validate(): boolean {
		const value = (this.element as HTMLInputElement).value;
		let isValid = true;

		for (const validator of this.validators) {
			if (!validator.validate(value)) {
				this.errorElement.textContent = validator.getErrorMessage();
				this.errorElement.classList.remove("hidden");
				this.element.classList.add("bg-red-50", "border-red-300");
				isValid = false;
				break;
			}
		}

		if (isValid) {
			this.errorElement.classList.add("hidden");
			this.element.classList.remove("bg-red-50", "border-red-300");
		}

		return isValid;
	}

	reset() {
		(this.element as HTMLInputElement).value = "";
		this.errorElement.textContent = "";
		this.errorElement.classList.add("hidden");
	}
}
