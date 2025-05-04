import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation, useRegisterMutation, useGetMeQuery } from '../core/auth/auth-api';
import { setCredentials, setError, logout } from '../core/auth/auth-slice';
import { RootState } from '../core/store';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();
  const { refetch: getMe } = useGetMeQuery(undefined, {
    skip: !token,
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await loginMutation({ email, password }).unwrap();
      dispatch(setCredentials(response));
      return response;
    } catch (error: any) {
      dispatch(setError(error.data?.message || 'Login failed'));
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await registerMutation({ email, password, name }).unwrap();
      dispatch(setCredentials(response));
      return response;
    } catch (error: any) {
      dispatch(setError(error.data?.message || 'Registration failed'));
      throw error;
    }
  };

  const checkAuth = async () => {
    if (token) {
      try {
        const response = await getMe().unwrap();
        dispatch(setCredentials(response));
        return true;
      } catch (error) {
        dispatch(logout());
        return false;
      }
    }
    return false;
  };

  const signOut = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    login,
    register,
    checkAuth,
    signOut,
  };
}; 