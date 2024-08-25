import SelectorType from "../enum/SelectorTypeEnum";
import Validator from "./Validator";

export default interface FormFieldConfig {
	selector: string | HTMLElement;
	selectorType?: SelectorType;
	errorSelector: string | HTMLElement;
	errorSelectorType?: SelectorType;
	validator: Validator[] | Validator;
	event?: string;
}
