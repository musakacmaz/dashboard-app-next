import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = 'http://localhost:3000/api';

export const useGetApplications = (path) => {
    if (!path) {
        throw new Error('Path is required');
    }
    const url = baseUrl + path;
    const { data: applicationsData, error } = useSWR(url, fetcher);
    return { applicationsData, error };
};
