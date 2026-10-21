function getBaseValidationError(field) {
	const value = field.value.trim();

	switch (field.id) {
		case "company-name":
			return value.length >= 2 ? "" : "El nombre de la empresa debe tener al menos 2 caracteres";
		case "contact-name":
			return value.split(/\s+/).filter(Boolean).length >= 2 ? "" : "Ingresa nombre y apellido del contacto";
		case "contact-email":
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Ingresa un email corporativo válido (ejemplo: <nombre@empresa.com>)";
		case "contact-phone":
			return /^\+\d(?:[\d\s().-]*\d)$/.test(value) ? "" : "El teléfono debe incluir código de país (ejemplo: +1 213 555 0147)";
		case "company-website":
			if (!value) return "";
			try {
				const url = new URL(value);
				return /^https?:$/.test(url.protocol) ? "" : "Si incluyes sitio web, debe ser una URL válida";
			} catch {
				return "Si incluyes sitio web, debe ser una URL válida";
			}
		default:
			return "";
	}
}

function getGroupValidationErrors(form) {
	const errors = {};

	if (!form.querySelector("#operating-country").value) {
		errors.operatingCountry = "Selecciona el país de operación principal";
	}
	if (!form.querySelector("#product-type").value) {
		errors.productType = "Selecciona el tipo de producto que manejas";
	}
	if (!form.querySelector("#monthly-volume").value) {
		errors.monthlyVolume = "Selecciona el volumen mensual estimado";
	}
	if (!Array.from(form.querySelectorAll('input[name="services"]')).some((input) => input.checked)) {
		errors.services = "Selecciona al menos un servicio de interés";
	}
	if (!form.querySelector('input[name="current3pl"]:checked')) {
		errors.current3pl = "Indica si actualmente trabajas con otro proveedor logístico";
	}
	if (!form.querySelector("#privacy-acknowledgement").checked) {
		errors.privacyAcknowledgement = "Debes aceptar la política de privacidad para continuar";
	}

	return errors;
}

function getCommentsValidationError(field) {
	const excess = field.value.length - 500;
	return excess > 0 ? `Los comentarios no pueden exceder 500 caracteres (quedan ${excess})` : "";
}

function buildValidationItems(form) {
	const fieldItem = (key, fieldId, errorId) => ({
		key,
		controls: [form.querySelector(`#${fieldId}`)],
		errorElement: form.querySelector(`#${errorId}`),
		getError: () => getBaseValidationError(form.querySelector(`#${fieldId}`))
	});
	const groupItem = (key, controls, errorId) => ({
		key,
		controls,
		errorElement: form.querySelector(`#${errorId}`),
		getError: () => getGroupValidationErrors(form)[key] || ""
	});

	return [
		fieldItem("companyName", "company-name", "company-name-error"),
		fieldItem("contactName", "contact-name", "contact-name-error"),
		fieldItem("email", "contact-email", "contact-email-error"),
		fieldItem("phone", "contact-phone", "contact-phone-error"),
		fieldItem("website", "company-website", "company-website-error"),
		{
			key: "comments",
			controls: [form.querySelector("#comments")],
			errorElement: form.querySelector("#comments-error"),
			getError: () => getCommentsValidationError(form.querySelector("#comments"))
		},
		groupItem("operatingCountry", [form.querySelector("#operating-country")], "operating-country-error"),
		groupItem("productType", [form.querySelector("#product-type")], "product-type-error"),
		groupItem("monthlyVolume", [form.querySelector("#monthly-volume")], "monthly-volume-error"),
		groupItem("services", Array.from(form.querySelectorAll('input[name="services"]')), "services-error"),
		groupItem("current3pl", Array.from(form.querySelectorAll('input[name="current3pl"]')), "current-3pl-error"),
		groupItem("privacyAcknowledgement", [form.querySelector("#privacy-acknowledgement")], "privacy-error")
	];
}

function renderValidation(form, keys) {
	let firstInvalid = null;
	let invalidCount = 0;

	for (const item of buildValidationItems(form)) {
		if (keys && !keys.includes(item.key)) continue;

		const message = item.getError();
		item.errorElement.hidden = !message;
		item.errorElement.textContent = message;

		for (const control of item.controls) {
			if (message) {
				control.setAttribute("aria-invalid", "true");
				firstInvalid ||= control;
			} else {
				control.removeAttribute("aria-invalid");
			}
		}

		if (message) invalidCount += 1;
	}

	return { firstInvalid, invalidCount };
}

if (typeof document !== "undefined") {
	const form = document.querySelector("#application-form");

	if (form) {
		const touched = new Set();
		const errorSummary = form.querySelector("#form-error-summary");
		const successMessage = form.querySelector("#form-success");
		const comments = form.querySelector("#comments");
		const commentsCounter = form.querySelector("#comments-counter");
		const volumeSelect = form.querySelector("#monthly-volume");
		const lowVolumeWarning = form.querySelector("#low-volume-warning");
		let submitted = false;

		function updateCommentsCounter() {
			const remaining = Math.max(0, 500 - comments.value.length);
			commentsCounter.textContent = `${comments.value.length} / 500 caracteres; quedan ${remaining}`;
		}

		function updateLowVolumeWarning() {
			lowVolumeWarning.hidden = volumeSelect.value !== "0-100";
		}

		comments.addEventListener("input", updateCommentsCounter);
		volumeSelect.addEventListener("change", updateLowVolumeWarning);
		updateCommentsCounter();
		updateLowVolumeWarning();

		function refreshValidation(key) {
			const result = renderValidation(form, submitted ? undefined : [key]);
			if (submitted) {
				errorSummary.hidden = result.invalidCount === 0;
				errorSummary.textContent = result.invalidCount ? "No se pudo completar la demostración. Revisa los errores indicados junto a los campos." : "";
			}
		}

		for (const item of buildValidationItems(form)) {
			for (const control of item.controls) {
				control.addEventListener("blur", () => {
					touched.add(item.key);
					refreshValidation(item.key);
				});

				if (control.tagName === "SELECT" || control.type === "checkbox" || control.type === "radio") {
					control.addEventListener("change", () => {
						successMessage.hidden = true;
						touched.add(item.key);
						refreshValidation(item.key);
					});
				} else {
					control.addEventListener("input", () => {
						successMessage.hidden = true;
						if (touched.has(item.key) || submitted) refreshValidation(item.key);
					});
				}
			}
		}

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			submitted = true;
			const result = renderValidation(form);
			errorSummary.hidden = result.invalidCount === 0;
			errorSummary.textContent = result.invalidCount ? "No se pudo completar la demostración. Revisa los errores indicados junto a los campos." : "";
			successMessage.hidden = result.invalidCount > 0;
			if (result.firstInvalid) {
				result.firstInvalid.focus();
			} else {
				successMessage.focus();
			}
		});

		form.addEventListener("reset", () => {
			setTimeout(() => {
				touched.clear();
				submitted = false;
				errorSummary.hidden = true;
				errorSummary.textContent = "";
				successMessage.hidden = true;
				for (const item of buildValidationItems(form)) {
					item.errorElement.hidden = true;
					item.errorElement.textContent = "";
					for (const control of item.controls) control.removeAttribute("aria-invalid");
				}
				updateCommentsCounter();
				updateLowVolumeWarning();
			}, 0);
		});
	}
}
