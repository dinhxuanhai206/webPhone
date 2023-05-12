import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { Grid, Card, DataGrid } from '@mui/material';
import MainCard from 'components/MainCard';
import { useEffect } from 'react';

function createData(id, category) {
    return {
        id,
        category
    };
}

const rows = [createData('1231413131131231', 'Phone'), createData('1231342131131231', 'Laptop')];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const Category = () => {
    useEffect(() => {
        document.title = 'Admin | Tshop - Category';
    }, []);

    return (
        <ComponentSkeleton>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <MainCard title="Categories">
                        <h1>Category</h1>
                    </MainCard>
                </Grid>
            </Grid>
        </ComponentSkeleton>
    );
};

export default Category;
