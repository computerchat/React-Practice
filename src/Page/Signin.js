import { useState } from "react";
export default function Signin () {
const[ formData, setFormData] = useState({
    email: '',
    password: '',
})
const [errors, setErrors] = useState({});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!formData.email || !formData.email.includes('@')) {
      setErrors({ ...errors, email: 'Invalid email address' });
      return;
    }

    // Simple password validation
    if (!formData.password || formData.password.length < 8) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters' });
      return;
    }


    console.log(formData);
  };

    return (
        <>
        <h1>This is Signin Page</h1>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
    {errors.email && <div className="text-danger">{errors.email}</div>}
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  name="password" value={formData.password} onChange={handleChange} /> 
    {errors.password && <div className="text-danger">{errors.password}</div>}
  </div>
  
  <button  className="btn btn-primary">Submit</button>
</form>
</>
    );
}