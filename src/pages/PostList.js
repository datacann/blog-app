import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import { deleteBlogPost } from "../services/firebaseService";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await getDocs(collection(db, "blog"));
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deleteBlogPost(postId);
      setPosts(posts.filter(post => post.id !== postId));
      alert("Gönderi silindi!");
    } catch (err) {
      console.error("Silme hatası:", err);
      alert("Bir hata oluştu.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden relative">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt="Blog görseli"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">
            {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
          </h2>
          <p className="text-sm text-gray-600">
            {post.description.length > 100
              ? post.description.slice(0, 100) + "..."
              : post.description}
          </p>
          <Link
            to={`/post/${post.id}`}
            className="text-blue-600 text-sm mt-3 inline-block hover:underline"
          >
            Devamını Oku →
          </Link>
          <button
            onClick={() => handleDelete(post.id)}
            className="absolute top-2 right-2 text-2xl text-red-600 hover:text-red-800"
          >
            ×
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Home;