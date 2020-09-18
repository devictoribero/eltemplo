import {Logo} from 'client/components/ui/Atom/Logo'
import {Navigation} from './navigation'

export function TopBar() {
  return (
    <header>
      <div>
        <Logo/>
        <Navigation />
      </div>

      <style jsx>{`
        header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          min-height: 75px;
          z-index: 1;
          display: flex;
          align-items: center;
        }
        
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
					padding-left: 0.5rem;
          padding-right: 0.5rem;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          width: 100%;
				}
				
				@media screen and (min-width: 350px) {
					div {
						padding-left: 1rem;
						padding-right: 1rem;
					}
				}

				@media screen and (min-width: 768px) {
					div {
						width: 95%;
          }
          
          header {
            min-height: 75px;
          }
				}

				@media screen and (min-width: 1400px) {
					div {
						max-width: 1300px;
					}
				}
      `}</style>
    </header>
  )
}
