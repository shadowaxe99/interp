
import { USER_PROFILE_UPDATE, USER_PROFILE_ERROR } from '../types';

export const updateUserProfile = (userData) => async (dispatch) => {
  try {
    // API call to update user profile
    const response = await fetch('/api/user/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data.success) {
      dispatch({
        type: USER_PROFILE_UPDATE,
        payload: data.user,
      });
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    dispatch({
      type: USER_PROFILE_ERROR,
      payload: error.message,
    });
  }
};
