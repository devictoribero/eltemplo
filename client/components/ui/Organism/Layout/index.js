import {TopBar} from '../../Molecule/TopBar'

export function Layout({children}) {
  return (
    <div>
      <TopBar/>
      {children}
    </div>
  )
}