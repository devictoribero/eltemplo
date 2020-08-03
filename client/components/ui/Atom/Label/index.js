import React from "react"
import PropTypes from "prop-types"

const DISPLAYS = {
	INLINE: "inline",
	BLOCK: "block"
}

export const Label = ({htmlFor, display = DISPLAYS.BLOCK, children}) => (
	<label htmlFor={htmlFor} className={`label is--${display}`}>
		{children}
		<style jsx>{`
      label {
        --font-size: 16px;
      
        display: block;
        margin-bottom: 0.5rem;
        font-size: var(--font-size);
        font-weight: 600;
        letter-spacing: 0.5px;
      }

      .is--inline {
        display: flex;
        align-items: center;
        white-space: nowrap;
      }
      .is--block {display: block;}
    `}</style>
	</label>
)

Label.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	display: PropTypes.oneOf(Object.values(DISPLAYS)),
	children: PropTypes.node.isRequired
}

export const LabelDisplays = DISPLAYS