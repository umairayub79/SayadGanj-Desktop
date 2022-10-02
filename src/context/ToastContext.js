import { createContext, useContext, useReducer } from "react";

const ToastStateContext = createContext({ toast: [] })
const ToastDispatchContext = createContext(null)

function ToastReducer(state, action) {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toast: action.toast
            }
        case 'DELETE_TOAST': {
            const updatedToast = []
            return {
                ...state,
                toast: updatedToast
            }
        }
        default:
            throw new Error('unhandled action')
    }
}

export const ToastProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ToastReducer, {
        toast: [],
    })

    return (
        <ToastStateContext.Provider value={state}>
            <ToastDispatchContext.Provider value={dispatch}>
                {children}
            </ToastDispatchContext.Provider>
        </ToastStateContext.Provider>
    )
}

export const useToastStateContext = () => useContext(ToastStateContext)
export const useToastDispatchContext = () => useContext(ToastDispatchContext)