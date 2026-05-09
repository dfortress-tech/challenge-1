
      // JavaScript to handle form validation and submission
      // ── Grab all inputs ──
      const fnameInput = document.getElementById("fname");
      const lnameInput = document.getElementById("lname");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const consentInput = document.getElementById("contact");
      const form = document.querySelector("form");

      // ── Grab all error paragraphs ──
      const fnameError = document.getElementById("fname-error");
      const lnameError = document.getElementById("lname-error");
      const emailError = document.getElementById("email-error");
      const queryError = document.getElementById("query-error");
      const messageError = document.getElementById("message-error");
      const consentError = document.getElementById("contact-error");

      // ── Email regex ──
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // ── Helper functions ──
      function showError(input, error) {
        error.style.display = "block";
        if (input) input.style.borderColor = "var(--primary-color-3)";
      }

      function clearError(input, error) {
        error.style.display = "none";
        if (input) input.style.borderColor = "var(--neutral-color-2)";
      }

      // ── Validation functions ──
      function validateFname() {
        if (fnameInput.value.trim() === "") {
          showError(fnameInput, fnameError);
          return false;
        }
        clearError(fnameInput, fnameError);
        return true;
      }

      function validateLname() {
        if (lnameInput.value.trim() === "") {
          showError(lnameInput, lnameError);
          return false;
        }
        clearError(lnameInput, lnameError);
        return true;
      }

      function validateEmail() {
        if (emailInput.value.trim() === "") {
          emailError.textContent = "This field is required";
          showError(emailInput, emailError);
          return false;
        } else if (!emailRegex.test(emailInput.value)) {
          emailError.textContent = "Please enter a valid email address";
          showError(emailInput, emailError);
          return false;
        }
        clearError(emailInput, emailError);
        return true;
      }

      function validateQuery() {
        const isSelected = document.querySelector(
          'input[name="query"]:checked',
        );
        if (!isSelected) {
          showError(null, queryError); // no input border to change
          return false;
        }
        clearError(null, queryError);
        return true;
      }

      function validateMessage() {
        if (messageInput.value.trim() === "") {
          showError(messageInput, messageError);
          return false;
        }
        clearError(messageInput, messageError);
        return true;
      }

      function validateConsent() {
        if (!consentInput.checked) {
          showError(null, consentError); // no input border to change
          return false;
        }
        clearError(null, consentError);
        return true;
      }

      //Toast notification handler
      function showToast() {
        const toast = document.getElementById("toast");

        // Add the "show" class to the div
        toast.classList.add("show");

        // After 3 seconds, remove the show class
        setTimeout(function () {
          toast.classList.remove("show");
        }, 3000);
      }

      // ── Submit handler ──
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // run all validations and collect results
        const isValid = [
          validateFname(),
          validateLname(),
          validateEmail(),
          validateQuery(),
          validateMessage(),
          validateConsent(),
        ].every(Boolean); // true only if ALL return true

        if (isValid) {
          showToast();
        }
      });

      // ── Input listeners (clear error as user types after submit) ──
      fnameInput.addEventListener("input", () => {
        if (fnameError.style.display === "block") {
          clearError(fnameInput, fnameError);
        }
      });
      lnameInput.addEventListener("input", () => {
        if (lnameError.style.display === "block") {
          clearError(lnameInput, lnameError);
        }
      });
      emailInput.addEventListener("input", () => {
        if (emailError.style.display === "block") {
          clearError(emailInput, emailError);
        }
      });
      messageInput.addEventListener("input", () => {
        if (messageError.style.display === "block") {
          clearError(messageInput, messageError);
        }
      });

      // ── Radio + checkbox listeners (clear error when selected after submit) ──
      document.querySelectorAll('input[name="query"]').forEach((radio) => {
        radio.addEventListener("change", () => {
          if (queryError.style.display === "block") {
            clearError(null, queryError);
          }
        });
      });
      consentInput.addEventListener("change", () => {
        if (consentError.style.display === "block") {
          clearError(null, consentError);
        }
      });
    
