import React from "react"
import Box from "./index"
import {PADDING_VALUES, SHAPES} from "./config"

export default {title: "Atom/Box"}

const Wrapper = ({children}) => <div style={{margin: "1rem"}}>{children}</div>

export const byPadding = () => (
	<>
		<h1>Box by padding</h1>
		{Object.values(PADDING_VALUES).map(pad => (
			<Wrapper key={pad}>
				<Box key={pad} padding={pad} hasShadow hasHover>
					<p>eg tg edgh edg sdh dsghsd ghsd gh sdgh dsghsd gh sdg hs fh fhjdfhj dg hj dghjd ghj dg j gdhj dgjh dg hj dghj dg hj dghjdgj </p>
				</Box>
			</Wrapper>
		))}
	</>
)

export const byShape = () => (
	<>
		<h1>Box by shape</h1>
		{Object.values(SHAPES).map(shape => (
			<Wrapper key={shape}>
				<Box shape={shape} hasShadow hasHover>
					<p>eg tg edgh edg sdh dsghsd ghsd gh sdgh dsghsd gh sdg hs fh fhjdfhj dg hj dghjd ghj dg j gdhj dgjh dg hj dghj dg hj dghjdgj </p>
				</Box>
			</Wrapper>
		))}
	</>
)

