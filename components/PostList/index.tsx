import { Skeleton } from '@chakra-ui/skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import { useFeed } from '../../services/feed/feed';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import Post from '../Post/Post';

const skeletonCount = Array.from(Array(4).keys());

export default function PostList() {
  const response = useFeed();

  if (response.isLoading) {
    return (
      <>
        {skeletonCount.map((index) => (
          <Skeleton
            height="480px"
            width="100%"
            borderRadius="8px"
            key={index}
          />
        ))}
      </>
    );
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      {response.data?.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </ErrorBoundary>
  );
}
