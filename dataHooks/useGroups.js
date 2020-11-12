import useSWR from 'swr';

// Wraps fetch requests to be made with useSWR hook
const swrFetcher = url => fetch(url).then(res => res.json());

const useGroups = (id) => {
  const url = id ? `http://localhost:3000/api/group/${id}` : 'http://localhost:3000/api/groups';
  const { data, error } = useSWR(url, swrFetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
};

export default useGroups;