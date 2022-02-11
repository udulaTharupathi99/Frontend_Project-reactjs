import { useState, useEffect } from "react";
import RegistrationService from "../API/RegistrationService";
import { useNavigate  } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLog, setIsLog] = useState('')
    const navigate   = useNavigate()

    useEffect(()=>{
      console.log("useeffect");
      
    },[])

    const loginuser= async (e)=>{
        e.preventDefault();
        const user = {email,password}
        console.log(user);
      
        await RegistrationService.getlogin(email, password).then(async(res) => { await setIsLog( res.data)

            console.log('isLog',isLog);
            
            if(isLog===true) {
                console.log('welcome');
                navigate("/welcome")
                alert('welcome');
              }
            else {
              console.log('baaaa'); 
            }
         })   
    }

    return (
        <div className="container">
            <br/><br/><br/><br/><br/>
                <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                    <br/>
                    <h2 className="text-center">Login</h2>
                        <div className="card-body">

                              <form onSubmit={loginuser}>
                                  <div className="container">
                                      <div class="form-group mb-3">
                                          <label  className="form-label">Email address :</label>
                                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email}  onChange = {(e) =>setEmail(e.target.value)}  required></input>
                                          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                      </div>
                                      <div class="form-group mb-3">
                                          <label  className="form-label">Password :</label>
                                          <input type="password" className="form-control"  placeholder="Password" name="Password" value={password}    required
                                                  minength="4" title="please enter at least 4 characters" onChange = {(e) =>setPassword(e.target.value)}></input>
                                      </div>
                
                                      <button type="submit" className="btn btn-success" >Register</button>
                 
                                    </div>     
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>

    );
  }
  
  export default Login;