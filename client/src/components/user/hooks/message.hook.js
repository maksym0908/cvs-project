import { useCallback } from 'react'

export const useMessage = () => {
    return useCallback((text) => {
        debugger
        if (window.M && text) {
            window.M.toast({ html: text})
        }
    }, [])
}