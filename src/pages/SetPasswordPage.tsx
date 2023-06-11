import SetPasswordForm from 'components/authForms/SetPasswordForm';
import React from 'react';
import Helmet from "react-helmet";

const SetPasswordPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Registration Page" />
                <title>Registration Page</title>
            </Helmet>
            <SetPasswordForm />
        </>
    )
}

export default SetPasswordPage;