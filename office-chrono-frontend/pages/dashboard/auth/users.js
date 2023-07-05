import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Users() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>Users</p>
            </ProtectedRoute>
        </Layout>
    )
}
export default Users