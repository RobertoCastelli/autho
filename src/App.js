import React from "react"
import SignIn from "./components/SignIn"
import SignOut from "./components/SignOut"
import SignUp from "./components/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContextProvider from "./context/context"

function App() {
	return (
		<ContextProvider>
			<div className='container'>
				<div className='content'>
					<Header />
					<SignOut />
					<SignUp />
					<SignIn />
				</div>
				<Footer />
			</div>
		</ContextProvider>
	)
}

export default App
