import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
} from 'mdb-react-ui-kit';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import './header.scss'
import Logo from '../assets/logo.png'
import { AppState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { setUser } from '../../store/userSlice';
import useApiCall from '../../utils/useApiCall';
import { convertArray } from '../../utils/utils';
export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, loading, error } = useApiCall('https://jsonplaceholder.typicode.com/albums');
    const users = useSelector((state: AppState) => state.user);
    const dispatch = useDispatch();

    
    const performSearch = (searchQuery: string) => {
        const filteredData = data.filter((item) => item.title.toLocaleLowerCase().includes(searchQuery));
        const newArray = convertArray(filteredData)
        dispatch(setUser(newArray))

    };

    const debouncedSearch = debounce(performSearch, 1000); // 500ms debounce time (adjust as needed)

    // Handle changes in the search input field
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        debouncedSearch(newSearchTerm);

    };
    return (
        <header className='main-navigation'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className='col  d-flex  justify-content-start align-items-center' >
                        <div className="logo-wrapper">
                            <Link to='/' >
                                <img className='logo-image' src={Logo} alt='Logo Image' />
                            </Link>
                        </div>
                    </MDBCol>
                    <MDBCol className='col d-flex  justify-content-end align-items-center' >
                        <MDBInput label='Search..' id='formControlLg' type='text' onChange={handleSearchChange} value={searchTerm} />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </header>
    );
}