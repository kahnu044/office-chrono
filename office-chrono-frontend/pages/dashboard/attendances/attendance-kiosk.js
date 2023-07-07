import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import TableListItems from '../../../components/tables/TableListItems';


function attendance() {
    return (
        <Layout>
            <ProtectedRoute>
                <>
                    <TableListItems />
                </>
            </ProtectedRoute>
        </Layout>
    )
}

export default attendance