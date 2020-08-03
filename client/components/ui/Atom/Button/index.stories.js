import React from "react"
import Button from "./index"
import {THEMES, SIZES, SHAPE} from "./config"

export default {title: "Atom/Button"}

const Wrapper = ({children}) => <div style={{margin: "1rem"}}>{children}</div>

export const byThemes = () => (
	<>
		<h1>Button by size</h1>
		{Object.values(THEMES).map(theme => (
			<Wrapper key={theme}>
				<Button theme={theme}>button</Button>
			</Wrapper>
		))}
	</>
)
