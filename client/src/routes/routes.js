import { configRoutes } from '~/config/configRoutes'

// =========================== ROUTES CUSTOMER ================================== //
import DefaultLayout from '~/layouts/DefaultLayout'
import Home from '~/screen/Home/Home'
import Login from '~/screen/Login/Login'
import Register from '~/screen/Register/Register'
import Contact from '~/screen/Contact/Contact'
import Blog from '~/screen/Blog/Blog'
import AboutUs from '~/screen/AboutUs/AboutUs'
import Product from '~/screen/Product/Product'
import ProductDetail from '~/screen/ProductDetail/ProductDetail'
import WishList from '~/screen/WishList/WishList'
import Cart from '~/screen/Cart/Cart'
import MyAccount from '~/screen/MyAccount/MyAccount'

const customerRoutes = [
	{ path: configRoutes.login, components: Login, layout: null },
	{ path: configRoutes.register, components: Register, layout: null },
	{ path: configRoutes.home, components: Home, layout: DefaultLayout },
	{ path: configRoutes.product, components: Product, layout: DefaultLayout },
	{ path: configRoutes.productDetail, components: ProductDetail, layout: DefaultLayout },
	{ path: configRoutes.contact, components: Contact, layout: DefaultLayout },
	{ path: configRoutes.blog, components: Blog, layout: DefaultLayout },
	{ path: configRoutes.about, components: AboutUs, layout: DefaultLayout },
	{ path: configRoutes.wishlist, components: WishList, layout: DefaultLayout },
	{ path: configRoutes.cart, components: Cart, layout: DefaultLayout },
	{ path: configRoutes.account, components: MyAccount, layout: DefaultLayout, protected: true },
]

export { customerRoutes }
