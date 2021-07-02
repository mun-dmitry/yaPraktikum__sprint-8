const page = document.querySelector('.root');
const addCardButton = document.querySelector('.user-info__button');
const profileEditButton = document.querySelector('.user-info__edit-button');
const createCard = (...arg) => new Card(...arg);
const createFormValidator = (...arg) => new FormValidator(...arg);
const userInfoDataContainer = document.querySelector('.user-info__data');

const cardTemplate = document.querySelector('#place-card-template');
const cardListTemplate = document.querySelector('#places-list-template');
const popupTemplates = {
    addCard: document.querySelector('#addcard-template'),
    profile: document.querySelector('#edit-profile-template'),
    image: document.querySelector('#image-template')
}

const userInfo = new UserInfo(userInfoDataContainer);
const popup = new Popup(popupTemplates, createFormValidator, userInfo, userInfoDataContainer, page);
const placesList = new Cardlist(cardListTemplate, page, initialCards, createCard, popup, cardTemplate);

placesList.render();

addCardButton.addEventListener('click', popup._open);
profileEditButton.addEventListener('click', popup._open);

 /*
 Что понравилось:
 - Код структурирован
 - Используеются все нужные классы
 - Попап переиспользуется для всех форм
 Можно лучше:
 - Реализовать закрытие попапов на esc
 Надо исправить:
 - Не искать по document внутри классов
 */
