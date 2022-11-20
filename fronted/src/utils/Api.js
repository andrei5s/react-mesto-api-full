class Api {
    constructor({ baseUrl, headers }) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
            })
            .then(this._getResponseData)
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
            })
            .then(this._getResponseData)
    }

    editProfile({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
                body: JSON.stringify({
                    name: name,
                    about: about
                })
            })
            .then(this._getResponseData)
    }


    addCard({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
                body: JSON.stringify({
                    name: name,
                    link: link
                })
            })
            .then(this._getResponseData)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
            })
            .then(this._getResponseData)
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: isLiked ? 'DELETE' : 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
            })
            .then(this._getResponseData)
    }

    setAvatar(inputValues) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`, ...this._headers,
                },
                body: JSON.stringify({
                    avatar: inputValues['avatar']
                })
            })
            .then(this._getResponseData)
    }

}

export const api = new Api({
    //baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
    baseUrl: 'https://api.project.andrei5s.nomoredomains.icu',
    headers: {
        //authorization: '55080562-6390-49a9-9fc0-d604508c3448',
        'Content-Type': 'application/json'
    }
});