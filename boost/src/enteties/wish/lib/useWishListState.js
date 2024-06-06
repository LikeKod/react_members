import {
    useCallback,
    useState
} from "react"

export const useWishListState = () => {

    const localStorageKey = 'wishList'

    const loadWishList = useCallback(() => {
        const localStorageWishList = localStorage.getItem(localStorageKey)

        if (!localStorageWishList) {
            return []
        }

        return JSON.parse(localStorageWishList)
    }, [])


    const [wishList, setWishList] = useState(loadWishList())

    const saveItem = useCallback(() => {
        const newWishList = [...wishList, item]
        setWishList(newWishList)
        localStorage.setItem(localStorageKey, JSON.stringify(newWishList))
    }, [wishList])

    return {
        wishList,
        saveItem
    }
}