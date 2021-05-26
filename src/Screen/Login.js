import React,{useState} from 'react'
import login from '../login.json';


function Login() {
    const [username, setusername] = useState("");    
    const [password, setpassword] = useState("");

    const handleUsername=(e)=>{
        console.log(e.target.value);
        setusername(e.target.value);
    }

    
    const handlePassword=(e)=>{
        console.log(e.target.value);
        setpassword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        var user=null;
        for(const f of login)
        {
            if(f.username === username && f.password === password)
            {
                 user=f;
            }
        }
       
        if(user)
        {
            localStorage.setItem("User",JSON.stringify(user));
            window.location='/Home';
        }
        else{
            console.log("Please provide correct username or password");
        }
        
    
    }
    return (
        <div>
        <form>
            <input type="text" placeholder="Username" value={username} onChange={handleUsername}></input>
            <input type="password" placeholder="Password" value={password} onChange={handlePassword}></input>
            <button onClick={handleSubmit}>Login</button>
        </form>
        </div>
    )
}

export default Login
