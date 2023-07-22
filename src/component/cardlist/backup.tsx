import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import useApiCall, { ApiResponse } from "../../utils/useApiCall";
import Card from "../card/card.component";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../../store/userSlice";
import { AppState } from "../../store/store";
import { useEffect } from "react";


function Cardlist() {
    const { data, loading, error } = useApiCall('https://jsonplaceholder.typicode.com/albums');
    let newArray: any = []

    // to get the All uniq UserID In map
    const userIdMap = new Map();

    // to get the All uniq UserID
    data.map((item) => {
        userIdMap.set(item.userId, item.userId);
    });

    // TO create new Apraay to iterate easily
    userIdMap.forEach((value) => {
        const items = data.filter(item => item.userId == value)
        const arrayItem = { userId: value, insideUser: items }
        newArray.push(arrayItem)
    });

    const Elements = newArray.map((user: any) => {
        return <MDBCol key={'user-' + user.id + user.userId} md={3}><Card data={user} /></MDBCol>
    })

    // const dispatch = useDispatch();
    // const users = useSelector((state: AppState) => state.user);
 
    
    if (loading) return <><h1>loading...</h1></>
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