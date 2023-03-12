import React from 'react'
import { useEffect, lazy, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import type { RootState, AppDispatch } from 'store'
import { addAppLoading, removeAppLoading } from 'store/actions'
import Layout from 'components/partial/Layout'
import PrivateRoute from './components/PrivateRoute'

const Login = lazy(() => import('pages/Login'))
const SignUp = lazy(() => import('pages/SignUp'))
const ActivateAccount = lazy(() => import('pages/ActivateAccount'))
const RecoveryPassword = lazy(() => import('pages/RecoveryPassword'))
const Account = lazy(() => import('pages/Account'))
const AccountEdit = lazy(() => import('pages/AccountEdit'))
const NotFound = lazy(() => import('pages/NotFound'))

const Fallback = () => {
    const dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(addAppLoading())
        return () => {
            dispatch(removeAppLoading())
        }
    }, [])
    return <span />
}

const suspenseHOC = (Component: React.FC) => {
    return (
        <Suspense fallback={<Fallback />}>
            <Component />
        </Suspense>
    )
}

const Router: React.FC = () => {
    const userInfo: UserInfo = useSelector((state: RootState) => state.userInfo)
    const appLoading: number = useSelector((state: RootState) => state.appLoading)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={suspenseHOC(Login)} />
                    <Route path="signup" element={suspenseHOC(SignUp)} />
                    <Route path="activate/:id" element={suspenseHOC(ActivateAccount)} />
                    <Route path="recovery" element={suspenseHOC(RecoveryPassword)} />
                    <PrivateRoute path="account/edit" element={suspenseHOC(AccountEdit)} />
                    <PrivateRoute
                        path="account"
                        element={
                            (userInfo?.cockatiel && userInfo?.nick) ? (
                                suspenseHOC(Account)
                            ) : (
                                <Navigate to="/account/edit" />
                            )
                        }
                    />
                    {appLoading === 0 && (
                        <Route
                            path="/"
                            element={
                                <Navigate to={userInfo ? '/account' : '/login'} />
                            }
                        />
                    )}
                    <Route path='*' element={suspenseHOC(NotFound)} />
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default Router