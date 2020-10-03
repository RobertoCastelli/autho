import React, { useContext } from "react"
import { DataContext } from "../context/context"

const SignUp = () => {
	const { handleSubmitUp, handleChange } = useContext(DataContext)

	return (
		<div className='sign-up'>
			<h3>Sign Up</h3>
			<form onSubmit={handleSubmitUp}>
				<input
					type='text'
					name='nickname'
					placeholder='nickname'
					onChange={handleChange}
					onFocus={(e) => (e.target.value = "")}
				/>
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
				<button type='submit'>Sign Up</button>
			</form>
		</div>
	)
}

export default SignUp
