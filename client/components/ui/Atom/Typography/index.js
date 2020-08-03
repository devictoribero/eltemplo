import React from "react"
import PropTypes from "prop-types"

export function Typography({
	align = "left",
	gutterBottom = true,
	size = "medium",
	children,
	...rest
}) {
	const classes = [
		`is-aligned--${align}`,
		`is--${size}`,
		gutterBottom ? "has-bottom-space" : ""
	].join(" ")
  
	return (
		<>
			<p className={classes} {...rest}>{children}</p>
			<style jsx>{`
      p {
        line-height: 1.5;
        letter-spacing: 0.25px;
				margin: 0;
				color: var(--c-grey-darkest);
      }

      .has-bottom-space {
        margin-bottom: 1.5rem;
			}
			
			.is--small {
				font-size: 14px;
				line-height: 1.35;
			}
      .is--medium {
				font-size: 16px;
				line-height: 1.5;
			}
      .is--large {
				font-size: 18px;
				line-height: 1.6;
			}

      .is-aligned--left {text-align: left;}
      .is-aligned--center {text-align: center;}
    `}</style>
		</>
	)
}

Typography.propTypes = {
	align: PropTypes.oneOf(["left", "center", "right", "justify"]),
	size: PropTypes.oneOf(["small", "medium", "large"]),
	gutterBottom: PropTypes.bool,
	children: PropTypes.any.isRequired
}