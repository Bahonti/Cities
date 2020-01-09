let store = {
    _state : {
        profilePage : {
            post : [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage:{
            dialogs : [
                {id: 1, name: 'Baga'},
                {id: 2, name: 'shal'},
                {id: 3, name: 'Nurken'},
                {id: 4, name: 'Abdu'},
                {id: 5, name: 'Maga'},
                {id: 6, name: 'Rus'},
            ],
            messages : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log("kfjalkjflafd")
    },
    addPost() {
        let newPost = {
            id: 5,
            message:  this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.post.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newTExt) {
        this._state.profilePage.newPostText = newTExt
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

window.store = store;


export default store;