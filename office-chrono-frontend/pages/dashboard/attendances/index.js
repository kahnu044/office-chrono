import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function index() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>index</p>
            </ProtectedRoute>
        </Layout>
    )
}

export default index