import React, { useState, useCallback, useMemo, useEffect } from "react";import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import {LoginUserDetails} from '../../../Services/loginServices'
import { useDispatch, useSelector } from "react-redux";  
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName :'',
    password:'',
    serverURL:''
  });
const [userValidation ,setUserValidation]= useState(false)
const [PasswordValidation ,setPasswordValidation]= useState(false)
const [serverUrlValidation ,setServerURLValidation]= useState(false)
const loginUser = useSelector((state ) => state.loginUserDetails.loginUser);  

console.log(loginUser)
  const handleUserDetails=(e)=>{
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,   
    });
    
  }

  const handelLogin=()=>{
    checkValidation();
    LoginUserDetails(dispatch,userDetails);
    if(loginUser){
    navigate("/view/Collection");
  }
   
  }

  const checkValidation =()=>{
    if(userDetails.userName ===""){
      setUserValidation(true)
    }
    else{
      setUserValidation(false)
    }
    if(userDetails.password === ""){
      setPasswordValidation(true)
    }
    else{
      setPasswordValidation(false)
    }
    if( userDetails.serverURL === ""){
      setServerURLValidation(true)
    }
    else{
      setServerURLValidation(false)
    }
    
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Enter Base Url" name="serverURL" onChange={handleUserDetails} autoComplete="url" />
                 {serverUrlValidation &&  <label className="validationCss">*</label>}
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" name="userName"  onChange={handleUserDetails} autoComplete="username" />
                      {userValidation &&  <label className="validationCss">*</label>}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handleUserDetails}
                        name ="password"
                      />
                      {PasswordValidation &&  <label className="validationCss">*</label>}
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handelLogin}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
