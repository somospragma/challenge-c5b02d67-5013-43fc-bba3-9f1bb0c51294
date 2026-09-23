import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import ApiClient from '@/shared/services/apiClient';

interface UsePollingProps {
  queryKey: string[];
  queryFn: () => Promise<any>;
  enabled: boolean;
  interval: number;
}

const usePolling = ({ queryKey, queryFn, enabled, interval }: UsePollingProps) => {
  const { data, isLoading, isError, error, refetch } = useQuery(queryKey, queryFn, {
    enabled: false,
  });
  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (enabled) {
      const poll = async () => {
        await refetch();
        pollingRef.current = setTimeout(poll, interval);
      };

      poll();

      return () => {
        if (pollingRef.current) {
          clearTimeout(pollingRef.current);
        }
      };
    }
  }, [enabled, interval, refetch]);

  return { data, isLoading, isError, error };
};

export default usePolling;