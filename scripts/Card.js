class Card {

    
    /*
     Надо исправить:
     - Поиск по document запрещен внутри класса, все нужные элементы должны передаваться в параметрах
     +
    */

    constructor (cardData, popupElement, template) {
        this._cardData = cardData;
        this._popupElement = popupElement;
        this._template = template;

        this._view = this._template.content.cloneNode(true).children[0];
        this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);
        this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._removeHandler);
        this._view.querySelector('.place-card__image').addEventListener('click', this._popupElement._open);
    }

    _like () {
        this.classList.toggle('place-card__like-icon_liked');
    }

    _removeHandler = (event) => {
        event.stopPropagation();
        /*
         Можно лучше:
         - Не стоит останавливать всплытие события, если этого не требуется

         Коментарий для код-ревьюера:
         В данном случае остановить всплытие требуется, т.к. на родительском ноде стоит слушатель клика на открытие поп-апа картинки.
        */
        this._view.remove();
    }

    create = (parentObject) => {
        this._view.querySelector('.place-card__name').textContent = this._cardData.name;
        this._view.querySelector('.place-card__image').style.backgroundImage = `url(${this._cardData.link})`;
        // this.setEventListeners();
        parentObject.append(this._view);
    }

    // setEventListeners = () => {
        /*
         Можно лучше:
         - Вынести лайк, удаление и картинку в свойства класса
         +
        */
        // this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);
        // this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._removeHandler);
        // this._view.querySelector('.place-card__image').addEventListener('click', this._popupElement._open);
    // }
}
