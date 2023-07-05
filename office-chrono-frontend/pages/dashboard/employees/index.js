import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Employee() {
    return (
        <Layout>
            <ProtectedRoute>
                <div>Employee</div>
            </ProtectedRoute>
        </Layout>
    )
}
export default Employee