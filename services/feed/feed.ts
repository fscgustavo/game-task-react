import axios, { AxiosError } from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Post, Feed } from './feed.types';

const feedURI = 'https://localhost:44344/api/feed';

export const getFeed = async () => {
  const response = await axios.get<Feed>(feedURI);

  return response.data;
};

export const useFeed = () => {
  return useQuery<Feed, AxiosError>('feed', getFeed);
};

export const postFeedPost = async (post: Post) => {
  const response = await axios.post(feedURI, post);

  return response.data;
};

export const useFeedPostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postFeedPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('feed');
    },
  });
};
