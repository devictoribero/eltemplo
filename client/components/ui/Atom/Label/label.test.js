import React from "react"
import { render } from "@testing-library/react"
import {Label} from "./index"

describe("Atom / Label", () => {
	test("The user can see the text", () => {
		const { getByText } = render(
			<Label htmlFor='widget'>Light exposure</Label>
		)
		const element = getByText("Light exposure")
		
		expect(element).toHaveAttribute("for", "widget")
	})
	
})
