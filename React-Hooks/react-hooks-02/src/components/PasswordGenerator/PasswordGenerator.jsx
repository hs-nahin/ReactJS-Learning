import React, { useCallback } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const passwordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+-= {}[]|\:;'<>,.?/~`";
        
    }, [length, numberAllowed, charAllowed, setPassword])
    return (
        <div>
            
        </div>
    );
};

export default PasswordGenerator;