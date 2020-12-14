import React, { createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PageContextKeys } from "./keys";

export const PageContext = createContext();
const initialState = {
  userName: "",
  emailAddress: "",
  otpKey: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case PageContextKeys.userName:
        console.log("match")
        //if you dont want to store permanent then ignore below line
        AsyncStorage.setItem(PageContextKeys.userName, action.payload);
      return {
        ...state,
        userName: action.payload,
      };
    case PageContextKeys.otpKey:
      return {
        ...state,
        otpKey: action.payload,
      };
    default:
      return state;
  }
};
const AppContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        AsyncStorage.getItem(PageContextKeys.userName)
        .then((val)=>{
            if(val){
                dispatch({type:PageContextKeys.userName, payload:val});
                console.log("if username");
            }
            else{
                console.log("else otp key");
                dispatch({type:PageContextKeys.userName, payload:'Anees'});
            }
        });
        //
    },[])

    ////
    
    useEffect(()=>{
      AsyncStorage.getItem(PageContextKeys.otpKey)
      .then((val)=>{
          if(val){
              dispatch({type:PageContextKeys.otpKey, payload:val});
              console.log("if otp key");
          }
          else{
              console.log("else otp key");
              dispatch({type:PageContextKeys.otpKey, payload:'12345'});
          }
      });
      //
  },[])

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default AppContext;