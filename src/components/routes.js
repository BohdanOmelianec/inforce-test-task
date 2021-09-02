import ListItemInfo from "./ListItemInfo";
import ProductList from "./ProductList";


const routes = [
    {
        path: '/',
        component: <ProductList />,
        exact: true
    },
    {
        path: '/list-item-info',
        component: <ListItemInfo />,
        exact: true
    },
];

export default routes;