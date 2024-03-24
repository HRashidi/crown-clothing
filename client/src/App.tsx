import { useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './App.sass';

import Header   from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Footer from './components/footer/footer.component';
import { UserType } from './modules/commonTypes';
import { Dispatch } from 'redux';

type Props = {
    currentUser: UserType;
    checkUserSession: () => void;
}

const App = ({ checkUserSession, currentUser }: Props) => {
    useEffect(()=> {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
        <Router>
            <Header />
            <Routes>
                <Route path='/' Component={HomePage} />
                <Route path='/shop' Component={ShopPage} />
                <Route path='/checkout' Component={CheckoutPage} />
                <Route path='/signin'
                    element={currentUser? <Navigate to='/' replace /> : <SignInAndSignUpPage />}
                />
            </Routes>
            <Footer />
        </Router>
    </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch : Dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
