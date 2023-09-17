
import { AI_REQUEST, AI_SUCCESS, AI_FAILURE } from '../types';

export const aiRequest = () => ({
  type: AI_REQUEST,
});

export const aiSuccess = (data) => ({
  type: AI_SUCCESS,
  payload: data,
});

export const aiFailure = (error) => ({
  type: AI_FAILURE,
  payload: error,
});
