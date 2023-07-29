import { useState, useEffect } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        //const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', //{ signal: controller.signal }
                );

                const usernames = response.data.map(user => user.username)
                isMounted && setUsers(response.data);

            } catch (error) {
                console.log(error);
                if (isMounted) { // Check if the component is still mounted, essential, otherwise AbortController will cancel a request before it completes
                    navigate('/home', { state: { from: location }, replace: true });
                }
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            //controller.abort();
        }
    }, []);


    return (
        <article>
            <h2>Users List</h2>
            
            {users?.length > 0 
            ? ( 
                <ul> 
                    {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                </ul>
                )
            : <p>No users found</p>

            }
        </article>
    );
}

export default Users