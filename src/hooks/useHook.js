import {  useReducer } from "react";

const initialInputState = {
value:'',
isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT')
    {
        return{
            value: action.value            
        }

    }
    if(action.type === 'BLUR')
    {
        return{
            isTouched: true,
            value: state.value
        }

    }
    if(action.type === 'RESET')
    {
        return{
            initialInputState
        }

    }
  return {
    initialInputState
  };
};

const useHook = (validate) => {
//   const [userInput, setUserInput] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

  const[inputState, dispatch]=useReducer(inputStateReducer, initialInputState)

  const validateInput = validate(inputState.value);
  const hasError = !validateInput && inputState.isTouched;

  const enteredInputHandler = (event) => {
      dispatch({type:'INPUT', value: event.target.value})
    // setUserInput(event.target.value);
  };

  const onBlurHandler = (event) => {
      dispatch({type:'BLUR'})
    // setIsTouched(true);
  };

  const reset = () => {
    dispatch({type:'RESET'})
  };

  return {
    userInput: inputState.value,
    // isTouched,
    validateInput,
    hasError,
    enteredInputHandler,
    onBlurHandler,
    reset,
  };
};

export default useHook;
