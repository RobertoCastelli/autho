import React, { useContext } from "react"
import { DataContext } from "../context/context"

const SignOut = () => {
	const { handleClick, state } = useContext(DataContext)

	return (
		<div className='sign-out'>
			<button onClick={handleClick}>Sign Out</button>
			<p>{state}</p>
		</div>
	)
}

export default SignOut
