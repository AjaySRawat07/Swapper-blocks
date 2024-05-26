// context/EmployeeContext.js
import { createContext, useState } from "react";
import employees from "./EmployeeList";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employeeList, setEmployeeList] = useState(employees);
    const [teamList, setTeamList] = useState([]);

    const addToTeam = (employee) => {
        setTeamList([...teamList, employee]);
        setEmployeeList(employeeList.map(emp => emp.id === employee.id ? { ...emp, inTeam: true } : emp));
    };

    const removeFromTeam = (employee) => {
        setTeamList(teamList.filter(emp => emp.id !== employee.id));
        setEmployeeList(employeeList.map(emp => emp.id === employee.id ? { ...emp, inTeam: false } : emp));
    };

    return (
        <EmployeeContext.Provider value={{ employeeList, teamList, setTeamList, addToTeam, removeFromTeam }}>
            {children}
        </EmployeeContext.Provider>
    );
};
