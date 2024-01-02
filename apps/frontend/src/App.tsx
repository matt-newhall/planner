import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { Button } from "./atoms/Button/Button"
import { Logo } from "./atoms/Logo/Logo"

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mb-10 flex justify-center">
        <Logo img={reactLogo} link="https://react.dev" />
      </div>
      <h1 className="font-lato font-semibold text-white">
        LS3 Project with React
      </h1>
      <div className="text-white">
        <Button
          content={`count is ${count}`}
          onClick={() => setCount(count => count + 1)}
        />
        <p className="mb-10 font-lato text-white">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="font-lato text-grey">
        Click on the React logo to learn more
      </p>
    </>
  )
}
