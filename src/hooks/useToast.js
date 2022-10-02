import { useToastDispatchContext } from "../context/ToastContext";

export function useToast(duration) {
    const dispatch = useToastDispatchContext();

    function toast(type, message, delay, persist) {
        const id = Math.random().toString(36).substring(2, 9)
        setTimeout(() => {
            dispatch({
                type: 'ADD_TOAST',
                toast: {
                    type,
                    message,
                    id,
                }
            })
            if (!persist) {
                setTimeout(() => {
                    dispatch({ type: 'DELETE_TOAST', id })
                }, duration);
            }
        }, delay);
    }
    return toast
}