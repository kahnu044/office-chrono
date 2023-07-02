import Layout from '../../components/Layout';
import ProtectedRoute from '../../components/ProtectedRoute';
function users() {
    return (
        <Layout>
            <ProtectedRoute>
                <div>users</div>
            </ProtectedRoute>
        </Layout>
    )
}

export default users