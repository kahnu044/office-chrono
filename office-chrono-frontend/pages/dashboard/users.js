import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute';
function users() {
    return (
        <ProtectedRoute>
            <div>users</div>
        </ProtectedRoute>
    )
}

export default users