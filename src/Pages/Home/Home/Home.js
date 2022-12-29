import React from 'react';
import Post from '../Post/Post';
import PostesCard from '../Postes/PostesCard';

const Home = () => {
    return (
        <div className='mx-5'>
            <Post></Post>
            <PostesCard></PostesCard>
        </div>
    );
};

export default Home;