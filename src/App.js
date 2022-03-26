import { useState } from "react"
import "./styles/styles.scss"
import { useEffect } from "react"
import { AppRouter } from "./router/AppRouter"
import { AppContext } from "./context/AppContext"
function App() {
	const [context, setContext] = useState({
		screenSize: {
			width: window.innerWidth,
			height: window.innerHeight,
		},
	})

	useEffect(() => {
		console.log("se ejecuto")
		window.addEventListener("resize", () => {
			setContext({
				...context,
				screenSize: {
					width: window.innerWidth,
					height: window.innerHeight,
				},
			})
		})
	}, [])
	return (
		<AppContext.Provider value={[context, setContext]}>
			<AppRouter />
		</AppContext.Provider>
	)
}

export default App
