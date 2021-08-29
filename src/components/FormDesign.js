
// this is the using normal css------------------------------
// import React, { useState } from 'react'
// import './css/FormDesign.css'

// export default function FormDesign(props) {

//     const [inputTxt, setInputTxt] =useState("")
//     const [isValid, setIsValid]=useState(true)

//     const onChangeHandler=(e)=>{
//         setIsValid(true)
//         setInputTxt(e.target.value)
//     }

//     const onSubmitHandler=(event)=>{
//         event.preventDefault();


//         if(inputTxt.trim().length !==0){
//             props.addValue(inputTxt);
        
//         }else{
//             setIsValid(false)
//         }

//         setInputTxt("");
//     }

    

//     return (
//         <div className="form-control">
//             <form onSubmit={onSubmitHandler}>
//                 <label htmlFor="inputText" className={`label ${isValid || "err"}`}>Enter Your Activity</label><br />
//                 <input type="text" name="inputText" className={`inputText ${isValid || "err"}`} placeholder="Enter Activity" value={inputTxt}  onChange={onChangeHandler}/> <br />
//                 <button type="submit"><strong>+</strong> Add</button>
//             </form>
//         </div>
//     )
// }


// this is the using css modules and sass----------------------------
import React, { useState } from 'react'
import styles from './css/sass+module/FormDesign.module.scss'
import styled from 'styled-components'
export default function FormDesign(props) {

    const [inputTxt, setInputTxt] =useState("")
    const [isValid, setIsValid]=useState(true)

    const onChangeHandler=(e)=>{
        setIsValid(true)
        setInputTxt(e.target.value)
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();


        if(inputTxt.trim().length !==0){
            props.addValue(inputTxt);
        
        }else{
            setIsValid(false)
        }

        setInputTxt("");
    }

    const Button = styled.button`
        font-size: 2rem;
        background-color: blue;
        padding: 1rem 1.5rem;
        cursor: pointer;
        outline: none;
        color: white;
        margin: 1rem;
    `

    return (
        <>
            <div className={styles['form-control']}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="inputText" className={`${styles.label} ${isValid || styles.err}`}>Enter Your Activity</label><br />
                    <input type="text" name="inputText" className={`${styles.inputText} ${isValid || styles.err}`} placeholder="Enter Activity" value={inputTxt}  onChange={onChangeHandler}/> <br />
                    <button type="submit"><strong>+</strong> Add</button>
                </form>
            </div>
            <Button onClick={()=>{console.log("hello")}}>Added Via Styled</Button>
        </>
    )
}
