import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const instructorData = [
        { id: 1, name: 'Alice Instructor', JavaScript: 80, ReactJS: 90, NextJS: 75 },
        { id: 2, name: 'Bob Instructor', JavaScript: 70, ReactJS: 85, NextJS: 60 },
        { id: 3, name: 'Charlie Instructor', JavaScript: 95, ReactJS: 75, NextJS: 80 },
        { id: 4, name: 'David Instructor', JavaScript: 60, ReactJS: 70, NextJS: 50 },
        { id: 5, name: 'Eva Instructor', JavaScript: 85, ReactJS: 80, NextJS: 90 },
        { id: 6, name: 'Frank Instructor', JavaScript: 75, ReactJS: 95, NextJS: 85 },
        { id: 7, name: 'Grace Instructor', JavaScript: 65, ReactJS: 60, NextJS: 70 },
        { id: 8, name: 'Henry Instructor', JavaScript: 90, ReactJS: 85, NextJS: 75 },
        { id: 9, name: 'Ivy Instructor', JavaScript: 80, ReactJS: 70, NextJS: 65 },
        { id: 10, name: 'Jack Instructor', JavaScript: 70, ReactJS: 75, NextJS: 80 },
        { id: 11, name: 'Karen Instructor', JavaScript: 85, ReactJS: 90, NextJS: 95 },
        { id: 12, name: 'Leo Instructor', JavaScript: 75, ReactJS: 80, NextJS: 70 }
      ];
      
      
    // Calculate total values for each skill
    const totalJavaScript = instructorData.reduce((sum, instructor) => sum + instructor.JavaScript, 0);
    const totalReactJS = instructorData.reduce((sum, instructor) => sum + instructor.ReactJS, 0);
    const totalNextJS = instructorData.reduce((sum, instructor) => sum + instructor.NextJS, 0);

    // Prepare data for the pie chart
    const data = [
        { name: 'JavaScript', value: totalJavaScript },
        { name: 'ReactJS', value: totalReactJS },
        { name: 'NextJS', value: totalNextJS },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie dataKey="value" data={data} fill="#8884d8" label />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};


export default Dashboard;