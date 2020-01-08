import {rerenderEntireTree} from "../render";

let state = {
    profilePage : {
        post : [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11}
        ],
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message:  postMessage,
        likesCount: 0
    };
    state.profilePage.post.push(newPost);
    rerenderEntireTree(state)
}

export default state;