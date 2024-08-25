import SelectorType from "../../validation/enum/SelectorTypeEnum";
import Validator from "../../validation/interfaces/Validator";

export default interface FormFieldConfig {
	selector: string | HTMLElement;
	selectorType?: SelectorType;
	errorSelector: string | HTMLElement;
	errorSelectorType?: SelectorType;
	validator: Validator[] | Validator;
	event?: string;
}
