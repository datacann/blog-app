import { useParams,useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "blog", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost(docSnap.data());
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Yükleniyor...</div>;

  return (
    <div className="p-6">
    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
    <p className="text-gray-700 mb-2">{post.description}</p>
    <p className="text-sm text-gray-500">Tarih: {post.cdate?.toDate().toLocaleDateString()}</p>
    <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Geri Dön</button>
  </div>
  );
};

export default PostDetail;