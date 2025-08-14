import ky from "ky";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(blogData);

  const getAllProduct = async () => {
    try {
      const data = await ky.get("https://dummyjson.com/posts").json();
      setBlogData(data.posts);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getAllProduct();
    console.log("chaa");
  }, []);

  return (
    <div className="min-h-screen py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15">
      {isLoading ? (
        <Loading />
      ) : (
        blogData?.map((e) => {
          return (
            <div key={e.id} className="">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                  alt=""
                />
              </div>
              <div className="">
                <div className="flex items-center gap-6 mt-6">
                  <p className="text-[#99A1AF] text-xs">Mar 16, 2020</p>
                  <div className="flex gap-2">
                    {e.tags.map((tags) => {
                      return (
                        <p className="bg-[#182332] text-[#D1D5DC] py-1 px-3 rounded-full text-xs">
                          {tags}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <h1 className="text-xl mt-2 font-semibold">{e.title}</h1>
                <p className="mt-4 text-[#99A1AF]">
                  {e.body.slice(0, 100) + "..."}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Blog;
