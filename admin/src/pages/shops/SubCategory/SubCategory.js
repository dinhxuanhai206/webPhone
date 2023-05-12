import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { useEffect } from 'react';

const SubCategory = () => {
    useEffect(() => {
        document.title = 'Admin | Tshop - Sub category';
    }, []);

    return (
        <ComponentSkeleton>
            <h1>Hello SubCategory</h1>
        </ComponentSkeleton>
    );
};

export default SubCategory;
