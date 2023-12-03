import Login from "./Login"
import {useState} from 'react'
const Register=()=>{
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [pass, setPass]=useState('')
    const [login, setLogin]=useState(false)
    const [error, setError]=useState(false)
    const [btnDisabled, setbtnDisabled]=useState(true)



    const NameHandler=(e)=>{
        setName(e.currentTarget.value)
         if(name==='' || email==='' || pass===''){
            setbtnDisabled(true)
        }
        else{
             setbtnDisabled(false)
        }
    }
    const EmailHandler=(e)=>{
         setEmail(e.currentTarget.value)
        if(name==='' || email==='' || pass===''){
            setbtnDisabled(true)
        }
        else{
             setbtnDisabled(false)
        }
    }

    const HandlerFunc=(e)=>{
        e.preventDefault()
        if(name==='' || email==='' || pass===''){
            setError(true)
        }
        else{
            setLogin(true)
            setError(false)
            localStorage.setItem('name',JSON.stringify(name) )
            localStorage.setItem('email',JSON.stringify(email) )
            localStorage.setItem('pass',JSON.stringify(pass) )

        }
    }
    return(
        <>
        {!login?
        <>
        <h2>რეგისტრაციის გვერდი</h2>
        <form action="" onSubmit={HandlerFunc}>
            <input type="text" placeholder="Name" onChange={NameHandler} />
            <input type="email" placeholder="Email" onChange={EmailHandler}/>
            <input type="password" placeholder="password" onChange={(e)=>setPass(e.currentTarget.value)} />
            <button type="submit" disabled={btnDisabled}>ღილაკი</button>
            {error &&( <p>შეიყვანე ინფორმაციები სწორად</p>)}
           
        </form>
        </>
        :
        <Login/>
}
        </>
    )
}

export default Register