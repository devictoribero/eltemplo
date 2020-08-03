import React from "react"
import PropTypes from "prop-types"
import LinkNext from "next/link"

export const Link = ({
	href = "/",
	theme = "primary",
	children,
	icon,
	...rest
}) => {
	const themeClassName = [
		`is--${theme}`,
		icon ? "has--icon" : ""
	].join(" ")
  
	return (
		<>
			<LinkNext href={href}>
				<a className={themeClassName} {...rest}>
					{children}
					{icon}
				</a>
			</LinkNext>
      
			<style jsx>{`
        a {
					font-weight: 600;
          text-decoration: none;
					text-decoration: underline;
        }
        a:hover {text-decoration: none;}
				
				.has--icon {
					display: inline-flex;
					align-items: center;
				}
        .is--primary { color: var(--c-primary-dark); }
        .is--accent { color: var(--c-accent-dark); }
      `}</style>
		</>
	)
}
Link.propTypes = {
	href: PropTypes.string,
	theme: PropTypes.oneOf(["primary", "accent"]),
	isUnderlined: PropTypes.bool,
	icon: PropTypes.node,
	children: PropTypes.node.isRequired,
}