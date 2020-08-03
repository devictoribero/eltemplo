import React from "react"
import PropTypes from "prop-types"
import DynamicRender from "../../DynamicRender"

const AppFeatureImage = ({imageSrc, alt = ""}) => (
	<div>  
		<DynamicRender>
			<img src={imageSrc} alt={alt} title={alt}/>
		</DynamicRender>

		<style jsx>{`
      div {
        position: relative;
        border-radius: 20px;
        box-sizing: border-box;
        box-shadow: 0 20px 70px 0 rgba(0,0,0,0.1);
      }

      div:before {
        content: "";
        position: absolute;
        top: -1rem;
        left: -1rem;
        right: -1rem;
        bottom: -2rem;
        background-color: var(--c-grey-lightest);
        border-radius: 63% 37% 83% 17% / 30% 73% 27% 70%;
        z-index: -1;
      }

      img {
        display: block;
        width: 100%;
        border-radius: 20px;
      }
    `}</style>
	</div>
)

AppFeatureImage.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	alt: PropTypes.string,
}
export default AppFeatureImage