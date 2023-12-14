import React, { useContext, useState } from 'react'
import { MyContext } from '../context/myContext';
import { set } from 'react-hook-form';

export default function Email() {
    const [email, setEmail] = useState('');
    const [maskedEmail, setMaskedEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const { emailLen } = useContext(MyContext)

    const handleEmailChange = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(e.target.value);
        setIsValid(isValidEmail);
        setEmail(e.target.value);
    };


    const showMask = (_email) => {
        // this index represent the lenth of the name
        const indexG = _email.indexOf("@");
        let lenNewName = emailLen >= indexG ? 1 : indexG - emailLen;
        const startOfEmail = email.substring(0, lenNewName);
        const numOfStars = emailLen >= indexG ? indexG - lenNewName : emailLen;
        let duplicatedStars = ("*").split('').map(char => char.repeat(numOfStars)).join('');
        let endOfEmail = email.substring(email.indexOf('@'));
        const newEmail = startOfEmail + duplicatedStars + endOfEmail;
        console.log(newEmail);
        setMaskedEmail(newEmail)
    };
    return (
        <div className='container-fluid'>
            <div className='container'>
                <h1>Email</h1>
                <div className='all-form'>
                    <label>Email:</label><br />
                    <input
                        className='input-form'
                        type="text"
                        value={email}
                        onChange={handleEmailChange} 
                        placeholder='example@gmail.com'
                        />    
                    <br /> <br />
                    <button onClick={() => { showMask(email) }} disabled={!isValid} className='btn-submit'>mask</button>
                    <div style={{paddingTop:"24px", textAlign:"center"}} className='maskedE'>
                        {maskedEmail}
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );

}
