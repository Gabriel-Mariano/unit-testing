import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Button } from "../index"

describe("Button Component",()=> {
    it("should render correctly", ()=> {
        render(<Button />)
    })

    it("The Button title should be Click me", ()=> {
        const { getByText } = render(<Button title="Click me"/>)

        expect(getByText('Click me')).toBeInTheDocument()
    })
})