import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Roles() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>Roles</p>
            </ProtectedRoute>
        </Layout>
    )
}
export default Roles