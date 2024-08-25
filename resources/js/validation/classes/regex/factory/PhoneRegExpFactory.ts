import CountryCodeEnum from "../../../../enum/CountryCodeEnum";
import RegExpStrategy from "../../../interfaces/RegExpStrategy";
import FrancePhoneRegExp from "../phone/FrancePhoneRegExp";
import NorthAmericaPhoneRegExp from "../phone/NorthAmericaPhoneRegExp";

export default class PhoneRegExpFactory {
	// receives a string and returns a regular expression
	public static createRegExp(countryCode: CountryCodeEnum): RegExpStrategy {
		switch (countryCode) {
			case CountryCodeEnum.CANADA:
			case CountryCodeEnum.USA:
				return new NorthAmericaPhoneRegExp();
			case CountryCodeEnum.FRANCE:
				return new FrancePhoneRegExp();
			default:
				throw new Error(`Country code ${countryCode} is not supported.`);
		}
	}
}
