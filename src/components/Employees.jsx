import { useContext } from "react"
import { EmployeeContext } from "./ContextProvider"


const Employees = () =>{

    const{employeeList,addToTeam} =  useContext(EmployeeContext);
    
    return (
        <div className="border-4 border-black w-60">
            <h1 className="text-center">Employees</h1>
            <div>{
                employeeList.map((employ)=>(
                <div key={employ.id} className ={` flex justify-evenly mt-4 border ${employ.inTeam}? 'bg-gray-300':'bg-slate-300'`}>
                    <span>{employ.first_name}</span>
                    <p>{employ.age}</p>
                    {!employ.inTeam && (
                        <button onClick={()=>addToTeam(employ)}  className="border-2 border-black">Add</button>
                    )}
                </div>
                ))
                }</div>
        </div>
    )
}

export default Employees;