import React, { Component } from 'react'

const Context = React.createContext()
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_CONTACT':
        return{
            ...state,
            person: [action.payload, ...state.person]
        };

        case 'ADD_AVATAR':
        return{
            ...state,
            person: [action.payload, ...state.person]
        }

        default:
        return state;
    }
}

export class Provider extends Component{
    state = {
        person:
            {
                id: '',
                email: '',
                password: '',
                avatar: ''
            }
        ,
        dispatch: action => {
            this.setState(state => reducer(state, action))
        },
        addAvatar: (e) => {
            e.preventDefault();
            let per = this.state.person
            per.avatar = e.target.avatar.value
            this.state.person.avatar = e.target.avatar.value
            console.log(this.state.person)
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
              {this.props.children} 
            </Context.Provider>
        )
    }
}

export const Consumer =  Context.Consumer;

