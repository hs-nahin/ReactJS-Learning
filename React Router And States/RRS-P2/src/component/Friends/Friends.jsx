import { } from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = () => {
    const employee = useLoaderData();
    return (
        <div>
            <h1>Total Employees : {employee.length}</h1>
            <div>
                {
                    employee.map (employee => <Friend
                    key={employee.id}
                    employee = {employee}
                    /> )
                }
            </div>
        </div>
    );
};

export default Friends;