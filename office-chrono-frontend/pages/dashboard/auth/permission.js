import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Permission() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>Permission</p>
            </ProtectedRoute>
        </Layout>
    )
}

export default Permission