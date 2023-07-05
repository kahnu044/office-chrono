import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Departments() {
    return (
        <Layout>
            <ProtectedRoute>
                <div>Departments</div>
            </ProtectedRoute>
        </Layout>
    )
}
export default Departments