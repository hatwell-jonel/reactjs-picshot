import Images from "./Images";
import Loading from "./Loading";

function Gallery({ data, isFetching, photos, query }) {
  if (isFetching) return <Loading />;
  return (
    <section id="gallery">
      <div className="container">
        <h2 className="gallery__placeholder">
          {query ? `Search for ${query}:` : "Browse Photos:"}
        </h2>
        <div className="masonry">
          {query ? (
            <Images photos={data.results} />
          ) : (
            <Images photos={photos} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
