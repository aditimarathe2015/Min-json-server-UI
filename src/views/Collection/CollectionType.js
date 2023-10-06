import React from "react";
import {
  CForm,
  CFormLabel,
  CCardBody,
  CFormTextarea,
  CFormInput,
  CFormCheck,
  CContainer,
  CRow,
  CCol,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton
} from "@coreui/react";

function CollectionType() {
  return (
    <CForm>
      <CContainer>
        <CCardBody>
          <CRow>
            <CCol xs={3}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                label="Name"
                placeholder="name@example.com"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
            <CCol xs={3}>
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
            </CCol>
            <CCol xs={3}>
              <CFormCheck id="flexCheckDefault" label="Default checkbox" />
            </CCol>
            <CCol xs={3}>
              <CDropdown>
                <CDropdownToggle color="secondary">Proxy</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Get</CDropdownItem>
                  <CDropdownItem>Put</CDropdownItem>
                  <CDropdownItem>Post</CDropdownItem>
                  <CDropdownItem>Delete</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
          </CRow>
          </CCardBody>
          <CCardBody>
          <CRow>
            <CCol xs={12}>
              <CFormLabel>Validations</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormTextarea>
            </CCol>
            <CCol xs={12}>
              <CFormLabel>Transformation_in</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormTextarea>
            </CCol>
            <CCol xs={12}>
              <CFormLabel>Transformation_out</CFormLabel>
              <CFormTextarea
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormTextarea>
            </CCol>
          </CRow>
          
        </CCardBody>


        <CCardBody>
          <CRow>
            <CCol xs={12}>
              <CFormLabel>Queue</CFormLabel>
              <CFormInput
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormInput>
            </CCol>
            <CCol xs={12}>
              <CFormLabel>Schema</CFormLabel>
              <CFormInput
                id="exampleFormControlTextarea1"
                rows="3"
              ></CFormInput>
            </CCol>
            <br/>
            <CCol xs={12}>
              <CFormLabel>WebHook</CFormLabel>
              <CDropdown>
                <CDropdownToggle color="secondary">Select</CDropdownToggle>
                <CDropdownMenu>
                 
                  <CDropdownItem>Put</CDropdownItem>
                  <CDropdownItem>Post</CDropdownItem>
                  <CDropdownItem>Delete</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCol>
           
          </CRow>
          
          <CRow>
          <CButton color="primary">Primary</CButton>
          </CRow>
        </CCardBody>
      </CContainer>
    </CForm>
  );
}

export default CollectionType;
