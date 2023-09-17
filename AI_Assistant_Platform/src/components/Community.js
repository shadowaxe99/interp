
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCommunityPosts } from '../redux/actions/communityActions';

const Community = () => {
  const dispatch = useDispatch();
  const communityPosts = useSelector(state => state.community.posts);

  useEffect(() => {
    dispatch(fetchCommunityPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Community</h1>
      {communityPosts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Community;
