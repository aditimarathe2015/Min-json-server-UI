import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CButton
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCollections } from "../../Services/collectionServices";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usersDetails = useSelector(
    (state: any) => state.loginUserDetails.loginUser
  );

  const collections = useSelector((state : any) => state.collectionsDetails.collections);  


  useEffect(() => {
    getCollections(dispatch, usersDetails.serverURL);
  }, []);

  const handelLink=()=>{
    navigate("/view/CollectionType");
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
           Collection List
          </CCardHeader>
          <CCardBody>
            <CRow>
              {collections && collections.map((item :any, index:any) => (
                <CCol lg={4} key={index}>
                  <CCard textColor="dark" className={`mb-3 border-dark`}>
                    <CCardHeader>{item}</CCardHeader>
                    <CCardBody>
                      <CCardTitle>{item} </CCardTitle>
                      <CCardText>
                      <CButton color="link" onClick={handelLink}>{item} </CButton>
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Collection;
