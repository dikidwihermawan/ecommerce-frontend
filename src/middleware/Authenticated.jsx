import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authenticated } from '../store';
import { useNavigate } from 'react-router-dom';

function Authenticated({ children }) {
    const redirect = useNavigate();
    const auth = useRecoilValue(authenticated);

    useEffect(() => {
        if (!auth.check) {
            redirect('/login');
        }
    }, [auth.check]);
    return children;
}

export default Authenticated;
