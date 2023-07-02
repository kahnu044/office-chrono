// components/ProtectedRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = !!localStorage.getItem('token');

        if (!isAuthenticated) {
            router.replace('/');
        }
    }, []);

    return <>{children}</>;
};

export default ProtectedRoute;
