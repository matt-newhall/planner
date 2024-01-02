import { render } from "@testing-library/react"
import { App } from "./App"

jest.mock("./assets/react.svg", () => "./assets/react.svg")

describe("rendering the home page correctly", () => {
  it("sees the page title when the page renders", () => {
    const screen = render(<App />)
    expect(screen.getAllByText("LS3 Project with React").length).toStrictEqual(
      1,
    )
  })
})
