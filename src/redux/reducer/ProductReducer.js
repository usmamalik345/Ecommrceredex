import React from 'react'
import {ActionTypes} from "../constant/Action-types"

const intialState = {
    products: []
}
export const ProductReducer = (state = intialState , {type, payload}) => {
  
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state , products:payload};
            
        default:
                return state;
    }
  
}
