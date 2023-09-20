import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCollections } from "../../Services/collectionServices";

const Collection = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector(
    (state: any) => state.loginUserDetails.loginUser
  );

  const [collection, setCollection] = useState([""]);
  const collections = useSelector((state : any) => state.collectionsDetails.collections);  

  useEffect(() => {
    setCollection([
      "Books",
      "Clothes",
      "Games",
      "Schools",
      "Cities",
      "Country",
    ]);
  }, []);

  useEffect(() => {
    getCollections(dispatch, usersDetails.serverURL);
  }, []);
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List</strong> <small>Collection List</small>
          </CCardHeader>
          <CCardBody>
            <CRow>
              {collection.map((item, index) => (
                <CCol lg={4} key={index}>
                  <CCard textColor="dark" className={`mb-3 border-dark`}>
                    <CCardHeader>{item}</CCardHeader>
                    <CCardBody>
                      <CCardTitle>{item} card title</CCardTitle>
                      <CCardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card&#39;s content.
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
