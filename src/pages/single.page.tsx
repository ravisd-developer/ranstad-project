import { MDBContainer } from "mdb-react-ui-kit";
import Layout from "../component/layout/layout";
import { useParams } from "react-router-dom";
import useApiCall from "../utils/useApiCall";

function SingleUser() {
    let { userID } = useParams();
    const { data, loading, error } = useApiCall('https://jsonplaceholder.typicode.com/albums');
    const filteredData = data.filter(item => item.userId == Number(userID))
    const userElements = filteredData.map((user) => {
        return <li className="user-item" key={user.id} > {user.title}</li>
    })

    return (<>
        <Layout>
            <MDBContainer>
                {loading ? <>Loading</> : <></>}
                {error ? <>Someting went wrong</> : <></>}
                <h1>Users For userID: {userID}</h1>
               

                <ul className="user-list">
                    {
                        userElements
                    }
                </ul>


            </MDBContainer>
        </Layout>
    </>);
}

export default SingleUser;