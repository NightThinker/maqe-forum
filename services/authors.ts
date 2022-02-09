import apiConfig from '@/config/api-config';
import { AUTHORS } from '@/constants/api-url';

export const getAuthors = () => {
    return apiConfig.get(AUTHORS);
};