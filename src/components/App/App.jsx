import SharedLayout from "components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from "../RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "redux/hooks/useAuth";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
         <Route index element={<HomePage />} />
         <Route path="/home" element={<HomePage/>}/>
             <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                       redirectTo="/contacts"
                       component={<RegisterPage />}
                    />   
                  }
             />
             <Route 
                   path="/login"
                   element={
                    <RestrictedRoute
                        redirectTo="/contacts"
                        component={<LoginPage />}
                   />     
                   }  
               />       
             <Route 
                  path="/contacts" 
                  element={
                       <PrivateRoute redirectTo="/login" component={<ContactsPage />}/>} />
      </Route>
    </Routes>)
}

export default App;