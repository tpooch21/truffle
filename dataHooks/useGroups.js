import useSWR from 'swr';

// Wraps fetch requests to be made with useSWR hook
const swrFetcher = url => fetch(url).then(res => res.json());

const useGroups = () => {
  const { data, error } = useSWR('http://localhost:3000/api/groups', swrFetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isError: error
  }
};

export default useGroups;