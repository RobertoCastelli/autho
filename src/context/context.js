import React, { createContext, useState } from "react"
import { auth } from "../firebase/firebaseConfig"

export const DataContext = createContext()

const ContextProvider = ({ children }) => {
	const [user, setUser] = useState({ nickname: "", email: "", password: "" })
	const [state, setState] = useState("")

	const handleChange = (e) => {
		e.preventDefault()
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleSubmitIn = (e) => {
		e.preventDefault()
		auth
			.signInWithEmailAndPassword(user.email, user.password)
			.then((res) => setState(`Welcomeback ${res.user.displayName}!`))
			.catch((err) => setState(`oops! something is wrong: ${err.message}`))
		e.target.reset()
	}

	const handleSubmitUp = (e) => {
		e.preventDefault()
		auth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((res) => res.user.updateProfile({ displayName: user.nickname }))
			.then(() => setState(`${user.nickname} you have signed up succesfully!`))
			.catch((err) => setState(`oops! somethin is wrong: ${err.message}`))
		e.target.reset()
	}

	const handleClick = (e) => {
		e.preventDefault()
		setState(`Signed Out`)
		auth.signOut()
	}
	return (
		<DataContext.Provider
			value={{
				handleClick,
				handleChange,
				handleSubmitUp,
				handleSubmitIn,
				state,
			}}>
			{children}
		</DataContext.Provider>
	)
}

export default ContextProvider
