import React from "react"
import PropTypes from "prop-types"

const PADDING_VALUES = {
	NONE: "none",
	XSMALL: "xsmall",
	SMALL: "small",
	MEDIUM: "medium",
	LARGE: "large",
	XLARGE: "xlarge",
	GIANT: "giant",
}

const SHAPES = {
	SQUARE: "square",
	ROUNDED: "rounded",
	CIRCLE: "circle"
}

export function Box({
	hasShadow = false,
	hasHover = false,
	padding = PADDING_VALUES.MEDIUM,
	shape = SHAPES.CIRCLE,
	scalable = false,
	children,
	...rest
}) {
	const styles = [
		`${hasShadow ? "has-shadow" : ""}`,
		`${hasHover ? "has-hover" : ""}`,
		`${scalable ? "is-scalable" : ""}`,
		`has-shape-${shape}`,
		`has-padding-${padding}`,
		rest.className
	].join(" ")

	

	return (
		<div className={styles} {...rest}>
			{children}
			<style jsx>{`
        div {
          position: relative;
          background-color: white;
          box-sizing: border-box;
        }

        .has-shadow {
          box-shadow: 0 20px 70px 0 rgba(0,0,0,0.1);
          transition: box-shadow ease 0.15s;
        }

        .has-hover:hover {
          box-shadow: 0 6px 20px -3px rgba(1,1,1,0.15);
        }

        .has-padding-none { padding: 0; }
        .has-padding-xsmall { padding: 0.25rem; }
        .has-padding-small { padding: 0.5rem; }
        .has-padding-medium { padding: 1rem; }
        .has-padding-large { padding: 1.25rem; }
        .has-padding-xlarge { padding: 1.5rem 1.35rem; }
				.has-padding-giant { padding: 2rem; }
				
        .has-shape-square { border-radius: 0; }
        .has-shape-rounded { border-radius: 3px; }
				.has-shape-circle { border-radius: 10px; }
				
				.is-scalable {
					transition: transform 0.25s ease;
				}
				.is-scalable:hover {
					transform: scale(1.05);
				}
      `}</style>
		</div>
	)
}

Box.propTypes = {
	hasShadow: PropTypes.bool,
	hasHover: PropTypes.bool,
	shape: PropTypes.oneOf(["square", "rounded", "circle"]),
	padding: PropTypes.oneOf(Object.values(PADDING_VALUES)),
	scalable: PropTypes.bool,
	children: PropTypes.node.isRequired,
}

export const boxPaddings = PADDING_VALUES