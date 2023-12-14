import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import "../css/configuration.css"
import { MyContext } from '../context/myContext';
import { useNavigate } from 'react-router-dom';


export default function Configuration() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { setPacAn, pacAn, setRowLen, rowLen, setColLen, colLen, setEmailLen, emailLen } = useContext(MyContext)
    const nav = useNavigate()

    const onSub = (_data) => {
        localStorage.setItem("emailLen", _data.email);
        localStorage.setItem("colLen", _data.colums);
        localStorage.setItem("rowLen", _data.rows);
        localStorage.setItem("pacAn", _data.speed);
        setEmailLen(_data.email)
        setColLen(_data.colums)
        setRowLen(_data.rows)
        setPacAn(_data.speed)
        alert("All chages saved");
        nav(-1)

    }
    return (
        <div className='container-fluid'>
            <div className='container'>
                <h1>Configuration page</h1>
                <form onSubmit={handleSubmit(onSub)}>
                    <div className='all-form'>
                        <label>Email mask length:</label><br />
                        <input defaultValue={emailLen} className='input-form' type='number' {...register("email", { required: true, minLength: 1, maxLength: 10 })} />
                        {errors.email && <div className='invalid-err'>*invalid email mask length</div>} <br /><br />
                        <label>Matrix colums length:</label><br />
                        <input defaultValue={colLen} className='input-form' type='number' {...register("colums", { required: true, minLength: 1, maxLength: 10 })} />
                        {errors.colums && <div className='invalid-err'>*invalid matrix colums lengrh</div>}<br /><br />
                        <label>Matrix rows length:</label><br />
                        <input defaultValue={rowLen} className='input-form' type='number' {...register("rows", { required: true, minLength: 1, maxLength: 10 })} />
                        {errors.rows && <div className='invalid-err'>*invalid matrix rows lengrh</div>}<br /> <br />
                        <label>Pacman animation speed:</label><br />
                        <input defaultValue={pacAn} className='input-form' type='number' {...register("speed", { required: true, minLength: 1, maxLength: 10 })} />
                        {errors.speed && <div className='invalid-err'>*invalid matrix rows lengrh</div>}<br /> <br />
                        <button className='btn-submit'>GO!</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
