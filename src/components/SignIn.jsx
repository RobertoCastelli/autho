import React, { useContext } from "react"
import { DataContext } from "../context/context"

const SignIn = () => {
	const { handleSubmitIn, handleChange } = useContext(DataContext)

	return (
		<div className='sign-in'>
			<h3>Sign In</h3>
			<form onSubmit={handleSubmitIn}>
				<input
					type='email'
					name='email'
					placeholder='email'
					onChange={handleChange}
					onFocus={(e) => (e.target.value = "")}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					onChange={handleChange}
					onFocus={(e) => (e.target.value = "")}
				/>
				<button type='submit'>Sign In</button>
			</form>
		</div>
	)
}

export default SignIn
