import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import RegistrationService from "../API/RegistrationService";
import { useNavigate  } from 'react-router-dom'

function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate   = useNavigate()

    useEffect(()=>{
          console.log("useeffect");  
      },[])


    const adduser=(e)=>{
          e.preventDefault();
          const user = {email,password}
          console.log(user);
          RegistrationService.addUser(user).then((Response) => {navigate("/login")}).catch(error =>{console.log(error)})
          alert('Registrasion successful');
          console.log(Response);
      }
      
    return (
          <div className="container">
            <br/><br/><br/><br/><br/>
               <div className="row">
                  <div className="card col-md-6 offset-md-3 offset-md-3">
                     <br/>
                     <h2 className="text-center">Registrastion</h2>
                        <div className="card-body">
                            <form onSubmit={adduser} >
                                <div className="container">
                                    <div class="form-group mb-3">
                                        <label  className="form-label">Email address :</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email}  onChange = {(e) =>setEmail(e.target.value)} required="required"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label  className="form-label">Password :</label>
                                        <input type="password" className="form-control"  placeholder="Password" name="Password" required="required" value={password} onChange = {(e) =>setPassword(e.target.value)}
                                                minlength="4" title="please enter at least 4 characters" ></input>
                                   </div>
          
                                    <button type="submit" className="btn btn-success" >Register</button>
                                </div>     
                            </form>
                            <div className="text-center">already have account <Link to="/login" className="text-center">Login</Link></div>
                          </div>
                        </div>
                    </div>
                    {/* <Link to="/login" className="btn btn-primary mb-2">Login</Link>  */}
           </div>
    );
  }
  
  export default Registration;