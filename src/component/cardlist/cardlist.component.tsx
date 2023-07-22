import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import useApiCall, { ApiResponse } from "../../utils/useApiCall";
import Card from "../card/card.component";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../store/userSlice";
import { AppState } from "../../store/store";
import { useEffect } from "react";
import { convertArray } from "../../utils/utils";


function Cardlist() {
    const { data, loading, error } = useApiCall('https://jsonplaceholder.typicode.com/albums');
    const newArray = convertArray(data)
    const dispatch = useDispatch();
    const users = useSelector((state: AppState) => state.user);
    useEffect(()=> {
        if (!loading) {
             dispatch(setUser(newArray))
        }
    },[loading]);
    
    const Elements = users.users.map((user: any) => {
        return <MDBCol key={'user-' + user.id + user.userId} md={3}><Card data={user} /></MDBCol>
    })
    
    if (loading) return <><div className="spinner-border"  role="status">
    <span className="visually-hidden">Loading...</span>
  </div></>
    return (<>
        <MDBContainer>
            <MDBRow>
                {
                    Elements
                }
            </MDBRow>
        </MDBContainer>
    </>);
}

export default Cardlist;