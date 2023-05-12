import ComponentSkeleton from 'pages/components-overview/ComponentSkeleton';
import { useEffect } from 'react';

const Manufactures = () => {
    useEffect(() => {
        document.title = 'Admin | Tshop - Manufactures';
    }, []);

    return (
        <ComponentSkeleton>
            <h1>Hello Manufactures</h1>
        </ComponentSkeleton>
    );
};

export default Manufactures;
