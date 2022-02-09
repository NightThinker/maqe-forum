import apiConfig from '@/config/api-config';
import { POSTS } from '@/constants/api-url';

export const getPosts = () => {
    return apiConfig.get(POSTS);
};