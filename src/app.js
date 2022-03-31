import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { startSetExpenses } from './actions/expenses';
import {auth} from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {login, logout} from './actions/auth';
import LoadingPage from './components/LoadingPage';
const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    // const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(state)
})

const user = auth.currentUser;
onAuthStateChanged(auth, (user = auth.currentUser) => {
    if (user) {
      console.log("Auth state changed")
      const uid = user.uid;
      store.dispatch(login(uid))
      renderApp()
    } else {
      store.dispatch(logout())
    }
});


const renderApp = () => {

    const appRoot = document.getElementById('root')
    const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
    ReactDOM.render(<LoadingPage />, appRoot)
    ReactDOM.render(jsx, appRoot)

}

renderApp()


