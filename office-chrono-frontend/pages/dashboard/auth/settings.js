import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
function Settings() {
    return (
        <Layout>
            <ProtectedRoute>
                <p>Settings</p>
            </ProtectedRoute>
        </Layout>
    )
}
export default Settings