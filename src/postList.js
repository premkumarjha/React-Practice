import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from "./redux/postAPICall";
import "./index.css"
const PostList = () => {
  const dispatch = useDispatch();

  // Get the state from the store
  const { posts,isLoading, error } = useSelector((state) => state.posts);

  // Fetch the users when the component mounts
  useEffect(() => {
    
      dispatch(fetchPosts());
   
  }, [dispatch]);

  // Render different states
  console.log(posts)

  return (
    <div>
      <h2>Post List</h2>
      {isLoading ? <div>...Loading</div>:<ul>
        {!isLoading && posts?.map((post) => (
           <ul>
          <li key={post.id} >
            {post.id}
          </li>
          </ul>
        ))}
      </ul>}
      
    </div>
  );
};

export default PostList;
