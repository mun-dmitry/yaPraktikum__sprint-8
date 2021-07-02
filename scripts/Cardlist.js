class Cardlist {

    // static _template = document.querySelector('#places-list-template').content;
    /*
     Надо исправить:
     - Поиск по document запрещен внутри класса, все нужные элементы должны передаваться в параметрах
     +
     */

    constructor (template, container, defaultImages, createCard, popupElement, cardTemplate) {
        this._defaultImages = defaultImages;
        this._container = container;
        this._createCard = createCard;
        this._popupElement = popupElement;
        this._cardTemplate = cardTemplate;
        this._template = template;
    }

    addCard = (cardData) => {
        this._createCard(cardData, this._popupElement, this._cardTemplate).create(this._view);
    }

    render = (container) => {
        this._view = this._template.content.cloneNode(true).children[0];
        this._defaultImages.forEach(cardData => this._createCard(cardData, this._popupElement, this._cardTemplate).create(this._view));
        this._container.append(this._view);
    }
}
