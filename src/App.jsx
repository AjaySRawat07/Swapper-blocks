import { EmployeeContext, EmployeeProvider } from "./components/ContextProvider"
import Employees from "./components/Employees"
import TeamList from "./components/TeamList"


function App() {

  return (
  <EmployeeProvider>
    <div className="flex justify-center gap-8">
        <Employees />
        <TeamList />
    </div>
  </EmployeeProvider>
  )
}

export default App
