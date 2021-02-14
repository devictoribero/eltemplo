import React from "react"
import PropTypes from "prop-types"

const HEADING_TAGS = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
}

const SIZES = {
	giant: "giant",
	xxxl: "xxxl",
	xxl: "xxl",
	xl: "xl",
	l: "l",
	m: "m",
	s: "s",
	xs: "xs",
}

export function Title ({
	as: Heading = HEADING_TAGS.h1,
	align = "left",
	spacelessTop = false,
	spacelessBottom = false,
	size = SIZES.l,
	icon,
	children,
	...rest
}) {
	const classes = [
		'title',
		`is--${align}`,
		`is--${size}`,
		icon ? "has--icon" : "",
		spacelessTop ? "is--spaceless-top" : "",
		spacelessBottom ? "is--spaceless-bottom" : "",
	].join(" ")
  
	return (
		<Heading className={classes} {...rest}>
			{icon}
			{children}
      <style jsx>{`
        h4, h5,h6 {
          letter-spacing: 1.5px !important;
          font-weight: 500 !important;
        }

				.title {
					text-transform: uppercase;
				}
				
				.has--icon {
					display: flex;
					align-items: center;
				}

        .is--spaceless-top {
          margin-top: 0 !important;
				}
				
				.is--spaceless-bottom {
          margin-bottom: 0 !important;
				}
				
				.is--giant {
					font-size: 2.75rem;
					font-weight: 900;
					margin-bottom: 1.35rem;
					margin-top: 5rem;
					line-height: 1.15;
				}

				.is--xxxl {
					font-size: 2.25rem;
					font-weight: 900;
					line-height: 1.15;
					margin-bottom: 1.35rem;
					margin-top: 4rem;
				}
				.is--xxl {
					font-size: 2rem;
					font-weight: 900;
					margin-bottom: 1.5rem;
					margin-top: 3rem;
				}
				.is--xl {
					font-size: 1.75rem;
					font-weight: 700;
					margin-bottom: 1.25rem;
					margin-top: 2.5rem;
				}
				.is--l {
					font-size: 1.25rem;
					font-weight: 700;
					margin-bottom: 1.15rem;
					margin-top: 1.75rem;
				}
				.is--m {
					font-size: 1.15rem;
					font-weight: 600;
					margin-bottom: 0.75rem;
					margin-top: 1.5rem;
				}
				.is--s {
					font-size: 1rem;
					font-weight: 600;
					margin-bottom: 0.5rem;
					margin-top: 1rem;
				}
				.is--xs {
					font-size: 0.9rem;
					font-weight: 600;
					margin-bottom: 0.25rem;
					margin-top: 0.75rem;
				}

				@media screen and (min-width: 768px) {
					.is--giant {
						font-size: 4.5rem;
						line-height: 1.15;
						font-weight: 900;
						margin-bottom: 1.35rem;
						margin-top: 5rem;
					}
	
					.is--xxxl {
						font-size: 2.5rem;
						font-weight: 900;
						margin-bottom: 1.35rem;
						margin-top: 4rem;
					}
					.is--xxl {
						font-size: 2rem;
						font-weight: 900;
						margin-bottom: 1.5rem;
						margin-top: 3rem;
					}
					.is--xl {
						font-size: 1.75rem;
						font-weight: 700;
						margin-bottom: 1.25rem;
						margin-top: 2.5rem;
					}
					.is--l {
						font-size: 1.25rem;
						font-weight: 700;
						margin-bottom: 1.15rem;
						margin-top: 1.75rem;
					}
					.is--m {
						font-size: 1.15rem;
						font-weight: 600;
						margin-bottom: 0.75rem;
						margin-top: 1.5rem;
					}
					.is--s {
						font-size: 1rem;
						font-weight: 600;
						margin-bottom: 0.5rem;
						margin-top: 1rem;
					}
					.is--xs {
						font-size: 0.9rem;
						font-weight: 600;
						margin-bottom: 0.25rem;
						margin-top: 0.75rem;
					}
				}

        .is--left { text-align: left; }
        .is--center { text-align: center; }
        .is--right { text-align: right; }
      `}</style>
		</Heading>
	)
}

Title.propTypes = {
	as: PropTypes.oneOf(Object.values(HEADING_TAGS)),
	size: PropTypes.oneOf(Object.values(SIZES)),
	align: PropTypes.string,
	spacelessBottom: PropTypes.bool,
	spacelessTop: PropTypes.bool,
	icon: PropTypes.node,
	children: PropTypes.node,
}

export const titleSizes = SIZES
export const titleTags = HEADING_TAGS