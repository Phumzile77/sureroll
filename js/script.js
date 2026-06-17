const services = [
    { name: "Payroll Management", category: "Payroll", price: 1200, description: "Salary processing, employee payments, payslips, deductions, overtime calculations, and payroll records." },
    { name: "Accounting", category: "Accounting", price: 1800, description: "Bookkeeping that tracks income, expenses, and transactions so records stay accurate and up to date." },
    { name: "Tax Compliance", category: "Tax", price: 1500, description: "Tax preparation, calculations, submissions, documentation, and deadline support." },
    { name: "Financial Reporting", category: "Reporting", price: 1400, description: "Monthly and annual reports that highlight performance, trends, cash flow, and areas needing attention." },
    { name: "HR Administration", category: "HR Management", price: 1000, description: "Employee information support and payroll-related HR records to keep people administration organized." },
    { name: "Full Package", category: "Full Package", price: 4200, description: "An integrated solution for businesses that want one partner managing finance administration." }
];

const serviceRates = {
    Payroll: 1200,
    Accounting: 1800,
    Tax: 1500,
    Reporting: 1400,
    "HR Management": 1000,
    "Full Package": 4200
};

function renderServices() {
    const list = document.querySelector("#services-list");
    if (!list) return;

    const search = document.querySelector("#service-search")?.value.toLowerCase().trim() || "";
    const sort = document.querySelector("#service-sort")?.value || "default";

    let visibleServices = services.filter((service) => {
        return `${service.name} ${service.category} ${service.description}`.toLowerCase().includes(search);
    });

    if (sort === "name") {
        visibleServices.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sort === "price") {
        visibleServices.sort((a, b) => a.price - b.price);
    }

    list.innerHTML = visibleServices.map((service) => `
        <article class="service-card detailed-card">
            <p class="eyebrow">${service.category}</p>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <strong class="price-tag">From R${service.price.toLocaleString()} per month</strong>
        </article>
    `).join("") || `<p class="empty-state">No services match your search. Try another keyword.</p>`;
}

function setFieldError(field, message) {
    const error = document.querySelector(`[data-error-for="${field.id}"]`);
    field.classList.toggle("input-error", Boolean(message));
    if (error) error.textContent = message;
}

function validateField(field) {
    let message = "";

    if (field.required && !field.value.trim()) {
        message = "This field is required.";
    } else if (field.type === "email" && field.value && !field.validity.valid) {
        message = "Enter a valid email address.";
    } else if (field.type === "tel" && field.value && !field.validity.valid) {
        message = "Enter a valid South African phone number.";
    } else if (field.minLength > 0 && field.value.trim().length < field.minLength) {
        message = `Enter at least ${field.minLength} characters.`;
    } else if (field.type === "number" && field.value && !field.validity.valid) {
        message = "Enter a valid number.";
    }

    setFieldError(field, message);
    return !message;
}

function buildMailto(form) {
    const data = new FormData(form);
    const subject = form.dataset.formType === "enquiry" ? "Sureroll Service Enquiry" : "Sureroll Contact Message";
    const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
    return `mailto:hello@sureroll.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function calculateQuote(form) {
    const result = form.querySelector("#quote-result");
    if (!result) return;

    const service = form.querySelector("#service-needed")?.value;
    const employeeCount = Number(form.querySelector("#employee-count")?.value || 0);
    if (!service || employeeCount <= 0) {
        result.textContent = "";
        return;
    }

    const base = serviceRates[service] || 1200;
    const employeeAdjustment = Math.max(0, employeeCount - 10) * 35;
    const estimate = base + employeeAdjustment;

    result.innerHTML = `<strong>Estimated starting cost:</strong> R${estimate.toLocaleString()} per month. A consultant will confirm the final cost, availability, and best support option.`;
}

function processFormAsync(form) {
    const data = new FormData(form);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Object.fromEntries(data.entries()));
        }, 350);
    });
}

function setupForms() {
    document.querySelectorAll(".js-validate-form").forEach((form) => {
        const fields = [...form.querySelectorAll("input, select, textarea")];
        const response = form.querySelector(".form-response");

        fields.forEach((field) => {
            field.addEventListener("blur", () => validateField(field));
            field.addEventListener("input", () => {
                validateField(field);
                if (form.dataset.formType === "enquiry") calculateQuote(form);
            });
        });

        form.addEventListener("reset", () => {
            setTimeout(() => {
                fields.forEach((field) => setFieldError(field, ""));
                if (response) response.textContent = "";
                calculateQuote(form);
            }, 0);
        });

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const isValid = fields.every(validateField);

            if (!isValid) {
                if (response) response.textContent = "Please correct the highlighted fields before submitting.";
                return;
            }

            calculateQuote(form);
            if (response) response.textContent = "Your information has been validated. Preparing your message...";
            await processFormAsync(form);
            if (response) response.textContent = "Your message is ready. Your email app will open so you can send it to Sureroll.";
            window.location.href = buildMailto(form);
        });
    });
}

function setupLightbox() {
    const images = document.querySelectorAll(".hero-image img, .image-page-hero img");
    if (!images.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<button type="button" aria-label="Close image preview">&times;</button><img alt="Expanded website image">`;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector("button");

    images.forEach((image) => {
        image.classList.add("clickable-image");
        image.addEventListener("click", () => {
            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("open");
        });
    });

    closeButton.addEventListener("click", () => lightbox.classList.remove("open"));
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) lightbox.classList.remove("open");
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") lightbox.classList.remove("open");
    });
}

function setupRevealAnimation() {
    const items = document.querySelectorAll(".service-card, .blog-post, .form-card, .info-panel");
    items.forEach((item) => item.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach((item) => observer.observe(item));
}

function updateFooterYear() {
    document.querySelectorAll(".site-footer p").forEach((footer) => {
        footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    document.querySelector("#service-search")?.addEventListener("input", renderServices);
    document.querySelector("#service-sort")?.addEventListener("change", renderServices);
    setupForms();
    setupLightbox();
    setupRevealAnimation();
    updateFooterYear();
});

