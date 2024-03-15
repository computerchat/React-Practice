import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Signup (){
  const formik = useFormik({
    initialValues: {
      fName: '',
      lName: '',
      email: '',
      password: '',
      cNumber: '',
      gender: ''
    },
    validationSchema: Yup.object({
      fName: Yup.string()
        .required('First name is required'),
      lName: Yup.string()
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      cNumber: Yup.string()
        .matches(/^\d+$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Contact number is required'),
      gender: Yup.string()
        .required('Gender is required')
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className="container">
      <h1 className="mt-5">Signup</h1>
      <form className="row g-3 mt-3" onSubmit={formik.handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="fName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="fName" name="fName" value={formik.values.fName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.fName && formik.errors.fName ? <div className="text-danger">{formik.errors.fName}</div> : null}
        </div>
        <div className="col-md-12">
          <label htmlFor="lName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lName" name="lName" value={formik.values.lName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.lName && formik.errors.lName ? <div className="text-danger">{formik.errors.lName}</div> : null}
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
        </div>
        <div className="col-md-12">
          <label htmlFor="cNo" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="cNo" name="cNumber" value={formik.values.cNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.touched.cNumber && formik.errors.cNumber ? <div className="text-danger">{formik.errors.cNumber}</div> : null}
        </div>
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select id="gender" className="form-select" name="gender" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            <option value="">Choose...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? <div className="text-danger">{formik.errors.gender}</div> : null}
        </div>
        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  );
};


