import React from "react"
import PropTypes from "prop-types"

export function Container({isBoxed, className, children, ...rest}) {
	const classnames = [
		className,
		isBoxed ? "is--boxed" : "",
	].join(" ")

	return (
		<div className={classnames} {...rest}>
			{children}

			<style jsx>{`
				div {
					margin-left: auto;
					margin-right: auto;
					padding-left: 0.5rem;
					padding-right: 0.5rem;
					box-sizing: border-box;
				}
				
				@media screen and (min-width: 350px) {
					div {
						padding-left: 0.75rem;
						padding-right: 0.75rem;
					}
				}

				@media screen and (min-width: 768px) {
					div {
						width: 95%;
					}

					.is--boxed {
						max-width: 800px;
					}
				}

				@media screen and (min-width: 1400px) {
					div {
						max-width: 1300px;
					}
				}

			`}</style>
		</div>
	)
}

Container.propTypes = {
	isBoxed: PropTypes.bool,
	className: PropTypes.string ,
	children: PropTypes.node.isRequired
}