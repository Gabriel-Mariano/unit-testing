import { fireEvent, getByText, render } from '@testing-library/react'
import "@testing-library/jest-dom"
import Input from '..'

describe("Input Component", ()=> {
    it("should render correctly", ()=> {
        render(<Input />)
    })

    it("should pass the props correctly", ()=> {
        const { getByText } = render(<Input label="Digite algo"/>)

        expect(getByText("Digite algo")).toBeInTheDocument()
    })

    it("should handle with onChange correctly", ()=> {
        const { getByTestId } = render(<Input />)

        const elementInput = getByTestId("input-id") as HTMLInputElement

        fireEvent.change(elementInput, { target: { value:'new value' }})

        expect(elementInput.value).toBe("new value")
    })
})