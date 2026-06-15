import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {

  let initialInvestment = 0;
  let anualInvestment = 0;
  let expectedReturn = 0;
  let duration = 0;

  console.log(initialInvestment)

  return (
    <main>
      <Header></Header>
      <UserInput></UserInput>
    </main>
  )
}

export default App
