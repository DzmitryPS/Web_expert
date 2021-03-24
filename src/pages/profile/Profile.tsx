import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchProfile } from './profile.actions';
import { getProfile } from './profile.selectors';
import { logOut } from '../../store/auth/auth.actions';

function Profile() {
    const dispatch = useDispatch();

    const { loading, user, error } = useSelector(getProfile, shallowEqual);


    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    const handleSignOut = () => {
        dispatch(logOut());
    };

    return (
        <main className="main">
            <Container>
                {error && <p className="error">{error.message}</p>}

                <section>
                    <h4>User profile:</h4>
                    <div className="code">
                        {loading && <CircularProgress />}
                        {user && <div> My name is {user.name}
                            <hr />
                         My email is {user.email} </div>}
                    </div>
                </section>

                <Button variant="contained" color="secondary" onClick={handleSignOut}>
                    Sign out
                </Button>
            </Container>
        </main>
    );
}

export { Profile };
