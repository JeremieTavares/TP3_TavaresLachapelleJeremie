import Form from "../components/Form/Form";
import EmailValidator from "../validation/classes/EmailValidator";
import RequiredValidator from "../validation/classes/RequiredValidator";
import PhoneValidator from "../validation/classes/PhoneValidator";
import CountryCodeEnum from "../enum/CountryCodeEnum";
import FileFormatEnum from "../validation/enum/FileFormatEnum";
import { FileFormatValidator } from "../validation/classes/FileFormatValidator";
import { FileSizeValidator } from "../validation/classes/FileSizeValidator";
import { LengthValidator } from "../validation/classes/LengthValidator";
import { CheckedValidator } from "../validation/classes/CheckedValidator";
import RegexValidator from "../validation/classes/RegexValidator";
import NameRegExp from "../validation/classes/regex/NameRegExp";
import LetterRegExp from "../validation/classes/regex/LetterRegExp";
import FileDropzone from "../components/FileDropzone";

document.addEventListener("DOMContentLoaded", function () {
	document?.getElementById("applyButton")?.addEventListener("click", function () {
		document?.getElementById("applyForm")?.classList.toggle("hidden");
	});

	try {
		new FileDropzone({
			dropzoneId: "resumeUploadDropzone",
			inputId: "resume",
			filenameId: "resumeFilename",
		});

		new FileDropzone({
			dropzoneId: "motivationLetterUploadDropzone",
			inputId: "motivationLetter",
			filenameId: "motivationLetterFilename",
		});
	} catch (error) {
		console.error(error);
	}
});

const form = new Form("#jobApplicationForm");

form.addField({
	selector: "firstName",
	errorSelector: "firstNameError",
	validator: [new RequiredValidator(), new LengthValidator(2, 60), new RegexValidator(new NameRegExp(), "Le prénom")],
	event: "blur",
});

form.addField({
	selector: "lastName",
	errorSelector: "lastNameError",
	validator: [new RequiredValidator(), new LengthValidator(2, 60), new RegexValidator(new NameRegExp(), "Le nom")],
	event: "blur",
});

form.addField({
	selector: "email",
	errorSelector: "emailError",
	validator: [new EmailValidator(), new LengthValidator(2, 255)],
	event: "blur",
});

form.addField({
	selector: "phone",
	errorSelector: "phoneError",
	validator: new PhoneValidator(CountryCodeEnum.CANADA),
	event: "blur",
});

form.addField({
	selector: "country",
	errorSelector: "countryError",
	validator: [
		new RequiredValidator(),
		new LengthValidator(2, 255),
		new RegexValidator(new LetterRegExp(), "Le pays"),
	],
	event: "blur",
});

form.addField({
	selector: "resume",
	errorSelector: "resumeError",
	validator: [
		new FileFormatValidator([FileFormatEnum.PDF, FileFormatEnum.DOC, FileFormatEnum.DOCX, FileFormatEnum.TXT]),
		new FileSizeValidator(5 * 1024 * 1024), // 5 MB
	],
	event: "change",
});

form.addField({
	selector: "motivationLetter",
	errorSelector: "motivationLetterError",
	validator: [
		new FileFormatValidator([FileFormatEnum.PDF, FileFormatEnum.DOC, FileFormatEnum.DOCX, FileFormatEnum.TXT]),
		new FileSizeValidator(5 * 1024 * 1024), // 5 MB
	],
	event: "change",
});

form.addField({
	selector: "terms",
	errorSelector: "termsError",
	validator: [new CheckedValidator()],
});

form.onSubmit(() => {
	form.reset();
	const section = document.querySelector("#applyForm") as HTMLElement;

	(async () => {
		const confirmationAlert = await fetch("./../../views/jobs/partials/application-confirmation.html");
		section.innerHTML = await confirmationAlert.text();
	})();
});
