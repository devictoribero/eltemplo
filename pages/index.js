import {Layout} from "../client/components/ui/Organism/Layout"

function Home () {
	return (
		<Layout>
      <section>
        <div className="background"/>
        <header>
          <h1>El centro gaming más grande de Barcelona que siempre te has imaginado</h1>
          <p>Sin tiempos de espera de descarga, menores precio, más diversión. ¿A qué esperas?</p>
          <button>Saber más</button>
        </header>
      </section>
			<main>
        content
			</main>
			
      <style jsx>{`
        /* color pallette
         * #1a0c1b
         * #200f21
         * #382039
         * #5a3d5c
         * #f638dc
         */

        section {
          position: relative;
          display: flex;
          align-items: center;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        
        .background {
          background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-image: linear-gradient(180deg, rgba(18,8,19, 1), rgba(26,12,27, 0.75)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: -1;
        }
        
        header {
          padding: 1rem;
        }

        h1 {
          font-size: 2rem;
          font-weight: 900;
        }

        p {
          font-size: 1.25rem;
          line-height: 1.5;
        }

			`}</style>
		</Layout>
	)
}
export default Home

