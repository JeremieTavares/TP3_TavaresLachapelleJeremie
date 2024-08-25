export default interface RegExpStrategy {
	getPattern(): RegExp;
	getErrorMessage(): string;
}
