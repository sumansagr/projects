import React, { useState } from 'react'

function Login() {
    const[email,setemail] = useState("")
    const[password,setpassword] = useState("")

    const [allEntry, setallEntry] = useState([]);

    const submitForm = (e) => {
       e.preventDefault()
       
        const newEntry = { email:email, password:password}
        setallEntry([...allEntry,newEntry]);
        console.log(allEntry);
        setemail("");
        setpassword("")
        
    }

    return (
        <div > 
            <form onSubmit={submitForm}  >
            <div>
            <label htmlFor='email'>email</label> <br></br>
            <input type="text" name="email" placeholder='example@gmail.com' value={email}  onChange={(e)=>{setemail(e.target.value)
            console.log(e.target.value);}} /> <br/>
            </div>

             <div>
            <label htmlFor='password'>password</label><br></br>
            <input type="text" name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)
            console.log(e.target.value); }}/>
            </div>

            <button type='submit'>submit</button>
        </form>
        <div>
            {
                allEntry.map((value) => {
                    return (
                        <div className=''>
                            <p>{value.email}</p>
                            <p>{value.password}</p>


                            </div>
                    )

                })
            }
        </div>
        </div>
    ) 
}

export default Login
