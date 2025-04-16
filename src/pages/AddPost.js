import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBlogPost } from "../services/firebaseService";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBlogPost(title, description);
      setTitle("");
      setDescription("");
      alert("Gönderi eklendi!");
      navigate("/");
    } catch (err) {
      alert("Bir hata oluştu.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Yeni Blog Ekle</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Başlık</label>
            <input
              type="text"
              placeholder="Başlık girin"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Açıklama</label>
            <textarea
              placeholder="Açıklama girin"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-md resize-y min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Gönderiyi Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;