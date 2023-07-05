import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Designations() {
    return (
        <Layout>
            <ProtectedRoute>
                <div>Designations</div>
            </ProtectedRoute>
        </Layout>
    )
}
export default Designations