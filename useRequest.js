import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = '/api';
const API_ROUTES = { APPS: '/applications', MODELS: '/models' };

export const useGetData = () => {
    const { data: applicationsData, error: fetchApplicationsError } = useSWR(baseUrl + API_ROUTES.APPS, fetcher);
    const { data: modelsData, error: fetchModelsError } = useSWR(baseUrl + API_ROUTES.MODELS, fetcher);
    return { applicationsData, fetchApplicationsError, modelsData, fetchModelsError };
};
