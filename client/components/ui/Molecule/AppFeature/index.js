import React from "react"
import PropTypes from "prop-types"
import AppFeatureImage from "./app-feature-image"


const AppFeature = ({title, text, media, direction = "forward", cta}) => (
	<section className={`is--${direction}`}>
		<div className="content">
			<h1>{title}</h1>
			<p>{text}</p>
			{cta}
		</div>
    
		<div className="media">
			{media}
		</div>

		<style jsx>{`
      section {
        display: grid;
        grid-template-areas: "content" "media";
        grid-gap: 2rem;
        padding: 5rem 0;
        align-items: center;
      }
      
      .content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .media {
        grid-area: media;
      }

      h1 {
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.15;
      }
      
      h1,
      p,
      a {
        text-align: center;
      }
      
      p {
        line-height: 1.5;
        font-size: 1.25rem;
        margin: 1rem 0 0;
        color: var(--c-grey-dark);
      }
      
      @media screen and (min-width: 768px) {
        section {
          grid-template-areas: "content media";
          grid-template-columns: auto 50%;
          grid-gap: 3rem;
        }
      
        .is--reverse {
          grid-template-columns: 50% auto;
          grid-template-areas: "media content";
        }

        .is--forward .content {align-items: flex-end;}
        .is--reverse .content {align-items: flex-start;}
      
        h1,
        p,
        a {
          text-align: right;
        }

        .is--reverse h1,
        .is--reverse p {
          text-align: left;
        }
      }
      
      @media screen and (min-width: 1024px) {
        section {
          grid-gap: 4rem;
        }
      
        h1 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.5rem;
        }
      }

      @media screen and (min-width: 1200px) {
        section {
          grid-gap: 3rem;
        }
      }
    `}</style>
	</section>
)

AppFeature.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	media: PropTypes.any,
	direction: PropTypes.oneOf(["reverse", "forward"]),
	cta: PropTypes.node,
}
export default AppFeature
export {AppFeatureImage}
