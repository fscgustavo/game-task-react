import { Grid } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import Post from '../Post/Post';

const skeletonCount = Array.from(Array(4).keys());

export default function PostList({ posts, isLoading }) {
  if (isLoading) {
    <Grid
      templateColumns={{ md: '1fr 1fr' }}
      gridGap={4}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Carregando as postagens da linha do tempo"
      aria-busy="true"
      tabIndex={0}
    >
      {skeletonCount.map((index) => (
        <Skeleton height="120px" width="100%" key={index} />
      ))}
    </Grid>;
  }

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Grid templateColumns={{ md: '1fr 1fr' }} gridGap={4}>
        {posts?.map((post) => (
          <Post {...post} key={post.id} />
        ))}
      </Grid>
    </ErrorBoundary>
  );
}
