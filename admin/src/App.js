// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import GlobalStyle from 'styles/GlobalStyle';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <GlobalStyle>
            <ScrollTop>
                <Routes />
            </ScrollTop>
        </GlobalStyle>
    </ThemeCustomization>
);

export default App;
