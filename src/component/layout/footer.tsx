import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>     

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold'>
          Ahkeravi
        </a>
      </div>
    </MDBFooter>
  );
}