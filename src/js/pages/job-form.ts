import Form from "./../components/Form/Form";
import EmailValidator from "./../validation/classes/EmailValidator";
import RequiredValidator from "./../validation/classes/RequiredValidator";
import PhoneValidator from "./../validation/classes/PhoneValidator";
import CountryCodeEnum from "./../enum/CountryCodeEnum";

document.addEventListener("DOMContentLoaded", function () {
	document?.getElementById("applyButton")?.addEventListener("click", function () {
		document?.getElementById("applyForm")?.classList.toggle("hidden");
	});
});

const form = new Form("#jobApplicationForm");

form.addField({
	selector: "name",
	errorSelector: "nameError",
	validator: new RequiredValidator(),
});

form.addField({
	selector: "email",
	errorSelector: "emailError",
	validator: new EmailValidator(),
});

form.addField({
	selector: "phone",
	errorSelector: "phoneError",
	validator: new PhoneValidator(CountryCodeEnum.CANADA),
});

form.onSubmit(() => {
	alert("Merci, votre candidature a bien été reçue !");
	form.reset();
});
