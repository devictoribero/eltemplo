import React from "react"
import PropTypes from "prop-types"
import useNearScreen from "../../../hooks/use-near-screen"
import useOnScreen from "../../../hooks/use-on-screen"

const DynamicRender = ({children, placeholder, ...rest}) => {
	const [isNear, outerRef] = useNearScreen({ offset: "200px" })
	const [isIntersecting] = useOnScreen()

	if (isIntersecting||isNear) {
		return children
	}

	return (
		<div ref={outerRef} {...rest}>
			{placeholder}
		</div>
	)
}

DynamicRender.propTypes = {
	offset: PropTypes.string,
	placeholder: PropTypes.node,
	children: PropTypes.node.isRequired
}

export default DynamicRender