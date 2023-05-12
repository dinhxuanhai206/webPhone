// assets
import { ShopOutlined, SubnodeOutlined, BarChartOutlined, ReconciliationOutlined } from '@ant-design/icons';

// icons
const icons = {
    BarChartOutlined,
    ShopOutlined,
    SubnodeOutlined,
    ReconciliationOutlined
};

// ==============================|| MENU ITEMS - EXTRA SHOPS ||============================== //

const shops = {
    id: 'shops',
    title: 'Shops',
    type: 'group',
    children: [
        {
            id: 'product',
            title: 'Products',
            type: 'item',
            url: '/products',
            icon: icons.ShopOutlined
        },
        {
            id: 'category',
            title: 'Categories',
            type: 'item',
            url: '/category',
            icon: icons.BarChartOutlined
        },
        {
            id: 'sub_category',
            title: 'Sub Category',
            type: 'item',
            url: '/sub-category',
            icon: icons.SubnodeOutlined
        },
        {
            id: 'manufactures',
            title: 'Manufactures',
            type: 'item',
            url: '/manufactures',
            icon: icons.ReconciliationOutlined
        }
    ]
};

export default shops;
