import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBadge
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './card.scss'
export default function Card(props: any) {
  const { userId, insideUser } = props.data;
  // console.log(insideUser.length);

  return (
    <MDBCard>
      <MDBBadge color='warning' light pill className='position-absolute '>
        {insideUser.length}
      </MDBBadge>
      <MDBCardBody>
        <Link to={`/single-user/${userId}`}>
          <MDBCardTitle>{' User Id ' + userId}</MDBCardTitle>
        </Link>
      </MDBCardBody>
    </MDBCard>
  );
}