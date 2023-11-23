import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UseAuth = () => {
    const authUtilitis = useContext(AuthContext);

    return authUtilitis;

};

export default UseAuth;