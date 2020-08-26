import {Logo} from 'client/components/ui/Atom/Logo'
import {Navigation} from './navigation'

export function TopBar() {
  return (
    <header>
      <Logo/>
      <Navigation />
      <style jsx>{`
        header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          min-height: 50px;
          padding-left: 1rem;
          padding-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media screen and (min-width: 768px) {
          header {
            min-height: 75px;
          }
        }
      `}</style>
    </header>
  )
}
