import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render - shop
const Products = Loadable(lazy(() => import('pages/shops/Products/Products')));
const Category = Loadable(lazy(() => import('pages/shops/Category/Category')));
const SubCategory = Loadable(lazy(() => import('pages/shops/SubCategory/SubCategory')));
const Manufactures = Loadable(lazy(() => import('pages/shops/Manufactures/Manufactures')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            element: <DashboardDefault />
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'products',
            element: <Products />
        },
        {
            path: 'category',
            element: <Category />
        },
        {
            path: 'sub-category',
            element: <SubCategory />
        },
        {
            path: 'manufactures',
            element: <Manufactures />
        }
    ]
};

export default MainRoutes;
