// components/TeamList.js
import React, { useContext } from 'react';
import { EmployeeContext } from './ContextProvider';

const TeamList = () => {
    const { teamList, removeFromTeam, setTeamList } = useContext(EmployeeContext);

    const averageAge = teamList.length > 0 ? teamList.reduce((acc, emp) => acc + emp.age, 0) / teamList.length : 0;

    const sortByAge = () => {
        const sortedTeam = [...teamList].sort((a, b) => a.age - b.age);
        setTeamList(sortedTeam);
    };

    return (
        <div className="border-4 border-black w-60">
            <h1 className="text-center">Team</h1>
            <button onClick={sortByAge} className="text-center bg-pink-400 w-full">Sort By Age</button>
            <div>
                {teamList.map((employee) => (
                    <div key={employee.id} className="flex justify-evenly mt-4 border bg-slate-300">
                        <span>{employee.first_name}</span>
                        <p>{employee.age}</p>
                        <button onClick={() => removeFromTeam(employee)} className="border-2 border-black">
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div className="border bg-slate-300">Average age: {averageAge.toFixed(2)}</div>
        </div>
    );
};

export default TeamList;
