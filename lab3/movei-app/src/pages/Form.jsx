import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Form() {
    



     const [formValue,setFormValue]= useState({
        name:'',
        username:'',
        email:'',
        password:'',
        confirmPassword:''
     });
     const [formErrors, setFormErrors] = useState({
        name:null,
        username:null,
        email:null,
        password:null,
        confirmPassword:null
      });
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setFormErrors({
        name: formValue.name.length === 0 ? "Name is required" : null,
        username:
          formValue.username.length === 0
            ? "Username is required"
            : /\s/.test(formValue.username)
            ? "Username cannot contain spaces"
            : null,
        email:
          formValue.email.length === 0
            ? "Email is required"
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.email)
            ? "Invalid email format"
            : null,
        password:
          formValue.password.length === 0
            ? "Password is required"
            : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                formValue.password
              )
            ? "Password must be at least 8 characters long, contain one uppercase, one lowercase, one digit, and one special character."
            : null,
        confirmPassword:
          formValue.confirmPassword.length === 0
          ? "Confirm password is required"
          : formValue.confirmPassword !== formValue.password
          ? "Passwords do not match"
          : null,
        });

        //law fe ay errors tanya 
        const hasErrors = Object.values(formErrors).some((error) => error !== null);
     
        //kda byzher el data   
        if (!hasErrors) {
          alert(JSON.stringify(formValue, null, 2)); // Alert the form data
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "name") {
          setFormValue({
            ...formValue,
            name: value,
          });
          setFormErrors({
            ...formErrors,
            name: value.length === 0 ? "Name is required" : null,
          });
        }
      
        if (name === "username") {
          setFormValue({
            ...formValue,
            username: value,
          });
          setFormErrors({
            ...formErrors,
            username:
              value.length === 0
                ? "Username is required"
                : /\s/.test(value)
                ? "Username cannot contain spaces"
                : null,
          });
        }
      
        if (name === "email") {
          setFormValue({
            ...formValue,
            email: value,
          });
          setFormErrors({
            ...formErrors,
            email:
              value.length === 0
                ? "Email is required"
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? "Invalid email format"
                : null,
          });
        }
      
        if (name === "password") {
          setFormValue({
            ...formValue,
            password: value,
          });
          setFormErrors({
            ...formErrors,
            password:
              value.length === 0
                ? "Password is required"
                : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    value
                  )
                ? "Password must be at least 8 characters long, contain one uppercase, one lowercase, one digit, and one special character."
                : null,
          });
        }
      
        if (name === "confirmPassword") {
          setFormValue({
            ...formValue,
            confirmPassword: value,
          });
          setFormErrors({
            ...formErrors,
            confirmPassword:
              value.length === 0
                ? "Confirm password is required"
                : value !== formValue.password
                ? "Passwords do not match"
                : null,
          });
        }
      };
      
    

  return (
    <>
      <div style={{marginTop:"180px",textAlign:"left"}}>
      <div className="container mt-5 my-5" >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" 
              name="name"
              value={formValue.name} 
              onChange={handleChange}/>
            {formErrors.name && (
                    <div id="name" className="form-text text-danger">
                      {formErrors.name}
                    </div>
                  )}
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">User Name</label>
              <input type="username" className="form-control" id="username"
               name="username"
               value={formValue.username}
               onChange={handleChange} />
               {formErrors.username && (
                    <div id="username" className="form-text text-danger">
                      {formErrors.username}
                    </div>
                  )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" 
              name="email"
              value={formValue.email} 
              onChange={handleChange} />
               {formErrors.email && (
                    <div id="email" className="form-text text-danger">
                      {formErrors.email}
                    </div>
                  )}
            </div>
        
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password"
               name="password"
               value={formValue.password}
               onChange={handleChange} />
               {formErrors.password && (
                    <div id="password" className="form-text text-danger">
                      {formErrors.password}
                    </div>
                  )}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="confirmPassword" 
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange} />
               {formErrors.confirmPassword && (
                    <div id="confirmPassword" className="form-text text-danger">
                      {formErrors.confirmPassword}
                    </div>
                  )}
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    </div>


    </>
  )
}
