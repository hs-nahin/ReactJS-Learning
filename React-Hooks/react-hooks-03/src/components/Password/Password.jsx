import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Password = () => {
    const [passwordVisible, setPasswordVisible] = useState(true);

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
                type={passwordVisible ? 'password' : 'text'}
                placeholder='Password'
                style={{ paddingRight: '30px' }} // Space for the eye icon
            />
            <span
                onClick={handlePasswordToggle}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                }}
            >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye}/>
            </span>
        </div>
    );
};

export default Password;
