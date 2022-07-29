import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import { useGetPhotosBySearchQuery } from "../features/unsplashApi";
import { getUnsplash } from "../features/unsplashSlice";

function Homepage() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { photos } = useSelector((state) => state.unsplash);
  const { data, isFetching } = useGetPhotosBySearchQuery(query);

  useEffect(() => {
    dispatch(getUnsplash());
  }, []);

  return (
    <main>
      <Navbar />
      <Hero setQuery={setQuery} />
      <Gallery
        data={data}
        query={query}
        photos={photos}
        isFetching={isFetching}
      />
    </main>
  );
}

export default Homepage;
