import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function attendance() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>attendance</p>
            </ProtectedRoute>
        </Layout>
    )
}

export default attendance