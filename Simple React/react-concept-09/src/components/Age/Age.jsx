import React from 'react';

const Age = () => {
    const age = 23;
    // if (age > 23){
    //     return <h1>Over Age</h1>
    // } else if (age >= 23){
    //     return <h1>Perfect Age</h1>
    // } else {
    //     return (
    //         <h1>Under Age</h1>
    //     );
    // }
    return (
        // Container div for the Age component
        <div className="Age">
            {/* Ternary expression to determine the age category and display an appropriate message */}
            {age > 23 ? <h1>Over Age</h1> : (age >= 23 ? <h1>Perfect Age</h1> : <h1>Under Age</h1>)}
        </div>
    );
};

export default Age;