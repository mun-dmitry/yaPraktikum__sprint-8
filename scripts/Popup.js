class Popup {

    // static _addCardTemplate = document.querySelector('#addcard-template');
    // static _profileTemplate = document.querySelector('#edit-profile-template');
    // static _imageTemplate = document.querySelector('#image-template')
    /*
     Надо исправить:
     - Поиск по document запрещен внутри класса, все нужные элементы должны передаваться в параметрах
     +
     */

    constructor (templates, createFormValidator, userInfo, userInfoDataContainer, parentObject) {
        this._createFormValidator = createFormValidator;
        this._userInfo = userInfo;
        this._userInfoDataContainer = userInfoDataContainer;
        this._templates = templates;
        this._parentObject = parentObject;
    }

    _open = (event) => {
        if (event.target.classList.contains('user-info__button')) {
            this._view = this._templates.addCard.content.cloneNode(true).children[0];
            this._setFormValidator();
            this._view.querySelector('.popup__button').addEventListener('click', this._submitAddCardForm);
        } else if (event.target.classList.contains('user-info__edit-button')) {
            this._view = this._templates.profile.content.cloneNode(true).children[0];
            this._setFormValidator();
            this._view.querySelector('#profile-form').elements.name.value = this._userInfoDataContainer.querySelector('.user-info__name').textContent;
            this._view.querySelector('#profile-form').elements.job.value = this._userInfoDataContainer.querySelector('.user-info__job').textContent;
            this._view.querySelector('.popup__button').addEventListener('click', this._submitProfileForm);
        } else if (event.target.classList.contains('place-card__image')) {
            this._view = this._templates.image.content.cloneNode(true).children[0];
            const imageUrl = event.target.style.backgroundImage.substr(5, event.target.style.backgroundImage.length - 7);
            this._view.querySelector('.popup__image').setAttribute('src', imageUrl);
        }

        this._view.classList.add('popup_is-opened');
        this.setEventListeners();
        this._parentObject.append(this._view);
    }

    _close = () => {
        this._view.remove();
    }

    _onEscCloser = (event) => {
        if (event.keyCode == 27) {
            this._close();
        }
    }

    _setFormValidator = () => {
        const formValidator = this._createFormValidator(this._view.querySelector('form'), validationErrorMessages);
        formValidator._setEventListeners();
        formValidator._setSubmitButtonState();
    }

    _submitAddCardForm = (event) => {
        const cardData = [];
        cardData.name = this._view.querySelector('form').elements.name.value;
        cardData.link = this._view.querySelector('form').elements.link.value;
        placesList.addCard(cardData);
        this._close();
    }

    _submitProfileForm = () => {
        const userData =[];
        userData.name = this._view.querySelector('form').elements.name.value;
        userData.job = this._view.querySelector('form').elements.job.value;
        this._userInfo._setUserInfo(userData);
        this._userInfo._updateUserInfo(document.querySelector('.user-info__data'));
        this._close();
    }

    setEventListeners = () => {
        this._view.querySelector('.popup__close').addEventListener('click', this._close);
        this._parentObject.addEventListener('keydown', this._onEscCloser);
    }
}
