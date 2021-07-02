class FormValidator {

    constructor (formElement, validationErrorMessages) {
        this._formElement = formElement;
        this._errorMessages = validationErrorMessages;
    }

    _checkInputValidity = () => {
        const inputs = this._formElement.querySelectorAll('input');
        let isFormValid = true;
    
        inputs.forEach(input => {  
            if (!input.checkValidity()) {
                isFormValid = false;
                this._setValidationMessage(input);
            } else {
                this._eraseValidationMessage(input);
            }
        })
        
        return isFormValid;
    }
    
    _setValidationMessage (inputElement) {
        const error = inputElement.parentNode.querySelector('.error');
        if (inputElement.validity.valueMissing) {
            error.textContent = this._errorMessages.emptyInput;
        } else if (inputElement.validity.tooShort || inputElement.validity.tooLong) {
            error.textContent = this._errorMessages.wrongLength;
        } else if (inputElement.validity.typeMismatch) {
            error.textContent = this._errorMessages.urlTypeMismatch;
        }
    }

    _eraseValidationMessage (inputElement) {
        const error = inputElement.parentNode.querySelector('.error');
        error.textContent = '';
    }

    _setSubmitButtonState = (event) => {
        if (event) {event.preventDefault()};
        const submitButton = this._formElement.querySelector('.popup__button');

        if (!this._checkInputValidity()) {
            submitButton.setAttribute('disabled', true);
        } else {
            submitButton.removeAttribute('disabled');
        }
    }

    _setEventListeners = () => {
        this._formElement.querySelectorAll('.popup__input').forEach(input => input.addEventListener('input', this._setSubmitButtonState));
        this._formElement.querySelector('button').addEventListener('click', this._setSubmitButtonState);
    }
}