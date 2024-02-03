import { ID } from 'appwrite'
import React, {
    createContext,
    useEffect,
    useState
} from 'react'
import { account } from '../app-write'

export const AuthContext = createContext({
	authUser: async () => {},
	logoutUser: async () => {},
	user: null,
})

export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(null)

	useEffect(() => {
		checkUserStatus()
	}, [])

	const authUser = async (
		email,
		password,
		isRegister
	) => {
		try {
			if (isRegister) {
				await account.create(ID.unique(), email, password)
			}
			await account.createEmailSession(email, password)
			setUser(await account.get())
			// window.history.pushState({}, '', '/')
		} catch (error) {
			console.log(error)
			setUser(null)
		} finally {
			setIsLoading(false)
		}
	}

	const checkUserStatus = async () => {
		setIsLoading(true)
		try {
			setUser(await account.get())
		} catch (error) {
			setUser(null)
		} finally {
			setIsLoading(false)
		}
	}

	const logoutUser = async () => {
		await account.deleteSession('current')
		setUser(null)
		setIsLoading(false)
	}

	const contextData = {
		user,
		authUser,
		logoutUser,
	}

	return (
		<AuthContext.Provider value={contextData}>
			{isLoading ? <p>Загрузка...</p> : children}
		</AuthContext.Provider>
	)
}


