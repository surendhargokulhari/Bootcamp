import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const blogPosts = [
  { id: '1', title: 'Introduction to Wayanad', shortDescription: 'wayanad wonderful place.', content: 'romanced with nature in Wayanad in the monsoons and lived in Asias highest tree house located at 88ft above the ground. I’m a very romantic person, and yes that’s a secret to all. I romance with myself, red wine, cinnamon lemon tea, cheese cakes, music, dance, badminton and nature. t these the things one should really be in love with? I’m in the best of my moods when I m out into the wild, closest to nature, closest to purity, closest to God.', img: 'https://cdn.pixabay.com/photo/2020/01/16/04/52/wayanad-4769648_1280.jpg' },
  { id: '2', title: 'Varkala', shortDescription: 'fantastic place in kerala.', content: 'Varkala, the only cliff by the beach in Kerala, is a fantastic backpacking destination for its laid-back and serene vibe. I had to cancel a trek of mine twice to handle some issues at work and these arent the best times of my life. The frustration started building up and I had to make a quick escape to nature. Kerala seemed to be a good choice as the monsoon was ending and this is when the God s own country shines in the best of colors.', img: 'https://cdn.pixabay.com/photo/2020/06/05/22/21/beach-5264739_1280.jpg' },
  { id: '3', title: 'whats New Goa', shortDescription: 'Goa such a nice place.', content: 'Our trip to Kerala and Goa was a dream – the first time in years that we could truly switch off our computers and simply explore. As such, I put a lot of effort into crafting the perfect Kerala and Goa itinerary.As readers of this site know, we always prioritise finding special things to do and places to stay, and our time in India was filled with incredible finds and experiences.', img: 'https://cdn.pixabay.com/photo/2020/04/13/08/32/zzz-5037255_1280.jpg' }
];

const Home = () => {
  return (
    <div className="p-4 bg-warning ">
      <h1 className="text-2xl mb-4">Blog Posts</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id} className=" mb-3">
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline text-xl ">{post.title}</Link>
            <p>{post.shortDescription}</p>
            <img src={post.img} alt={post.title} className="w-full h-auto mt-2 rounded-lg w-50 h-30 " />
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <h2 className="p-4 text-red-500">404 - Post Not Found</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">{post.title}</h1>
      <img src={post.img} alt={post.title} className="w-full h-auto mb-4 rounded-lg" />
      <p>{post.content}</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="*" element={<h2 className="p-4 text-red-500">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
