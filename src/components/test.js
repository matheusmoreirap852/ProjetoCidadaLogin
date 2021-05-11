import React from "react";
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

const TextareaPage = () => {
  return (
    <MDBCol md="4">
      <MDBCard>
        <MDBCardBody>
          <form>
            <p className="h4 text-center py-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
             
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

export default TextareaPage;