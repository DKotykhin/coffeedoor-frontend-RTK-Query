import { useLocation, Navigate } from 'react-router-dom';

import Spinner from "components/spinner/Spinner";

import { useAuth } from "hooks/useAuth";
import { getToken } from 'services/getToken';

const RequireAdminAuth: React.FC<{ children: JSX.Element }> = ({ children }): JSX.Element => {
    const location = useLocation();
    const { isSuccess, isError, data } = useAuth();

    if (!getToken()) {
        return <Navigate to="/login" />
    }

    if (!isSuccess) {
        return isError ? <Navigate to='/login' state={{ from: location }} /> : <Spinner />
    }

    if (!(data?.user.role === 'admin')) {
        return <Navigate to='/login' state={{ from: location }} />
    }
    return children;
}

export const withAdminAuth = (Component: React.FunctionComponent): JSX.Element => {
    return (
        <RequireAdminAuth>
            <Component />
        </RequireAdminAuth>
    );
}