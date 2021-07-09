import Head from "next/head";
import { Layout } from "../client/components/ui/Organism/Layout";
import { LinkButton } from "../client/components/ui/Atom/LinkButton";
import { Container } from "../client/components/ui/Atom/Container";
import {
  Title,
  titleSizes,
  titleTags,
} from "../client/components/ui/Atom/Title";
import { RiInstagramLine, RiTwitterLine, RiMessage2Line } from "react-icons/ri";
import Video from "client/components/ui/Atom/Video";
import { Pricing } from "client/components/ui/Organism/Home/Pricing";
import { FindUs } from "client/components/ui/Organism/Home/FindUs";
import { About } from "client/components/ui/Organism/Home/About";
import { Contact } from "client/components/ui/Organism/Home/Contact";
import { Footer } from "client/components/ui/Organism/Footer";

function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Centro esports de alto rendimiento en Barcelona | El Templo Esports
        </title>
        <meta
          name="description"
          content="El Templo Esports es un centro gaming de alto rendimiento en Barcelona con un enfoque 100% a la comunidad. ¡Ven a jugar con tus amigos!"
        />
      </Head>
      <HomeHeader />
      {/* <OurBrands/> */}
      <main>
        <About />
        <Pricing />
        <FindUs />
        {/* <Benefits/> */}
        <Contact />
      </main>
      <Footer />

      <style jsx>{`
        main {
          padding-top: 7.5rem;
          background-image: url(/images/wallpaper-malzahar.jpg);
          background-image: linear-gradient(
              to bottom,
              rgba(26, 26, 46, 0.8),
              rgba(26, 26, 46, 1)
            ),
            url(/images/wallpaper-malzahar.jpg);
          background-size: cover;
          background-position: top right;
          background-repeat: no-repeat;
        }
      `}</style>
    </Layout>
  );
}
export default Home;

function HomeHeader() {
  const scrollToSelector = (elementSelector) => {
    var element = document.querySelector(elementSelector);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (e, selector) => {
    e.preventDefault();
    scrollToSelector(selector);
  };

  return (
    <section>
      <div className="home-hero-overlay" />
      <Container>
        <div className="home-hero-displayer">
          <div className="HomeHeader-inner">
            <Title size={titleSizes.giant} as={titleTags.h1} spacelessTop>
              El Templo eSports
            </Title>
            <p>
              Te gustan los eSports? Te gusta jugar? Entonces también te
              gustaremos nosotros. Ven a conocernos!
            </p>
            <div className="HomeHeader-buttons">
              <LinkButton
                href="#find-us"
                onClick={(e) => handleClick(e, "#find-us")}
                theme="primary"
                size="large"
                style={{ marginRight: "0.5rem" }}
              >
                Donde estamos
              </LinkButton>
              <LinkButton
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                theme="accent"
                size="large"
              >
                Contactanos
              </LinkButton>
            </div>

            <div className="HomeHeader-tags">
              <HomeTagContact
                icon={<RiInstagramLine size={16} />}
                href="https://www.instagram.com/temploesports/"
              >
                temploesports
              </HomeTagContact>
              <HomeTagContact
                icon={<RiTwitterLine size={16} />}
                href="https://twitter.com/TemploEsports"
              >
                temploesports
              </HomeTagContact>
              <HomeTagContact
                icon={<RiMessage2Line size={16} />}
                href="tel:+34646502841"
              >
                646 502 841
              </HomeTagContact>
            </div>
          </div>
          <div className="video-wrapper">
            <Video src="/videos/el-templo-presentation.mp4" type="video/mp4" />
          </div>
        </div>
      </Container>
      <style jsx>{`
        section {
          position: relative;
          align-items: center;
          min-height: 60vh;
          padding-top: calc(3rem + 75px);
          padding-bottom: 4rem;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }

        .home-hero-displayer {
          display: flex;
          flex-direction: column;
        }

        .video-wrapper {
          display: block;
          margin-top: 4rem;
          margin-bottom: -10rem;
          animation: fromBottom 0.35s ease-in, fadein 0.5s ease-in;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
          opacity: 0;
        }

        .home-hero-overlay {
          background-image: url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
          background-image: linear-gradient(
              180deg,
              rgba(26, 26, 46, 1),
              rgba(26, 26, 46, 0.5)
            ),
            url("https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
          background-size: cover;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          animation: blurIn 1s ease-in;
        }

        @keyframes blurIn {
          from {
            filter: blur(20px);
          }
          to {
            filter: blur(0);
          }
        }

        .HomeHeader-inner {
          box-sizing: border-box;
          animation: fromBottom 0.5s ease-in, fadein 0.75s ease-in;
          animation-delay: 0.25s;
          animation-fill-mode: forwards;
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 2rem;
        }

        @keyframes fromBottom {
          from {
            transform: translateY(10px);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        p {
          color: #e0e1e2;
          font-size: 1.25rem;
          line-height: 1.5;
          margin-top: 0;
          max-width: 600px;
        }

        .HomeHeader-buttons {
          margin-top: 2rem;
        }

        .HomeHeader-tags {
          margin-top: 0.5rem;
          display: flex;
        }

        @media screen and (min-width: 768px) {
          section {
            min-height: 90vh;
          }
        }

        @media screen and (min-width: 992px) {
          section {
            min-height: 95vh;
          }

          .HomeHeader-buttons {
            width: 350px;
          }
        }
      `}</style>
    </section>
  );
}

function HomeTagContact({ icon, href, children }) {
  return (
    <a href={href}>
      <span>{icon}</span>
      {children}

      <style jsx>{`
        a {
          align-items: center;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          font-size: 0.75rem;
          padding: 0.35rem 0.5rem;
          text-decoration: none;
          color: #f2f2f2;
          transition: background-color 0.15s ease;
        }

        a:not(:first-child) {
          margin-left: 0.25rem;
        }

        a:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        span {
          display: flex;
          align-items: center;
          margin-right: 0.25rem;
        }

        @media screen and (min-width: 768px) {
          a {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </a>
  );
}
