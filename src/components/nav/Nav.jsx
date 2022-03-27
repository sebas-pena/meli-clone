import { NavBottom } from "./NavBottom"
import { NavTop } from "./NavTop"

export const Nav = () => {
  return (
    <header className="nav-header">
      <div className="nav-header__ctn">
        <NavTop />
        <NavBottom />
      </div>
    </header>
  )
}
