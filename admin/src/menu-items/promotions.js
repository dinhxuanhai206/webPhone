// assets
import { ThunderboltOutlined, MoneyCollectOutlined, BarcodeOutlined } from '@ant-design/icons';

// icons
const icons = {
    ThunderboltOutlined,
    MoneyCollectOutlined,
    BarcodeOutlined
};

// ==============================|| MENU ITEMS - EXTRA PROMOTIONS ||============================== //

const promotions = {
    id: 'promotions',
    title: 'Promotions',
    type: 'group',
    children: [
        {
            id: 'banner',
            title: 'Banner',
            type: 'item',
            url: '/banner',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'best_seller',
            title: 'Best Sellers',
            type: 'item',
            url: '/best-sellers',
            icon: icons.MoneyCollectOutlined
        },
        {
            id: 'flash_deals',
            title: 'FLash Deals',
            type: 'item',
            url: '/flash-deals',
            icon: icons.ThunderboltOutlined
        }
    ]
};

export default promotions;
