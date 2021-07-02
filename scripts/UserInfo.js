class UserInfo {

    constructor (dataContainer) {
        this._dataContainer = dataContainer;
    }

    _setUserInfo = (userData) => {
        this._newName = userData.name;
        this._newJob = userData.job;
    }

    _updateUserInfo = (parentObject) => {
        this._dataContainer.querySelector('.user-info__name').textContent = this._newName;
        this._dataContainer.querySelector('.user-info__job').textContent = this._newJob;
    }
}