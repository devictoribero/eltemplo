import { Container } from "client/components/ui/Atom/Container";
import { Title, titleSizes, titleTags } from "client/components/ui/Atom/Title";
import { Typography } from "client/components/ui/Atom/Typography";
import { HomeSection } from "../section";

export function About() {
  return (
    <>
      <Container isBoxed>
        <HomeSection id="about-us">
          <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
            ¿Quienes somos?
          </Title>
          <Typography size="large">
            El Templo eSports es una marca que nace de la pasión por los
            deportes electrónicos. Siempre había sido nuestro sueño poder crear
            un espacio donde otros amantes de los eSports como nosotros pudieran
            reunirse y jugar juntos.
          </Typography>
        </HomeSection>
      </Container>
      <Container isBoxed>
        <HomeSection id="about-us">
          <Title size={titleSizes.giant} as={titleTags.h2} spacelessTop>
            ¿Qué es El Templo?
          </Title>
          <Typography size="large">
            El Templo “Gaming Center Barcelona” es el primer espacio que lleva
            al siguiente nivel el concepto de los centros de alto rendimiento en
            Barcelona, situado en el centro de la ciudad, con mas de 350 metros
            cuadrados y 55 ordenadores.
          </Typography>

          <Typography size="large">
            Este centro ha sido diseñado para cubrir todas las necesidades que
            pueda tener un jugador, tanto amateur como profesional.
          </Typography>
        </HomeSection>
      </Container>
    </>
  );
}
