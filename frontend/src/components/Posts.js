import React from 'react';

function Posts({ posts, user }) {
  return (
    <React.Fragment>
      <div className="lg:pl-8">
        <h1 className="font-bold mb-3">Posts from {user.name}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <div className="p-4 shadow mb-2">
              <h3 className="text-md font-bold text-gray-800">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Posts;
