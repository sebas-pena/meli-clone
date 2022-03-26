import { useContext } from "react"

import { AppContext } from "../../context/AppContext"
import { NavDesktop } from "./NavDesktop"
import { NavMobile } from "./NavMobile"

export const Nav = () => {
	const [context] = useContext(AppContext)
	const { screenSize } = context

	return screenSize.width > 950 ? <NavDesktop /> : <NavMobile />
}
