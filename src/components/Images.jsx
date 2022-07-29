import { BsCheckCircleFill, BsDownload } from "react-icons/bs";
import { downloadImage } from "../helpers";

function Images({ photos }) {
  return (
    <>
      {photos.map((photo) => {
        return (
          <div className="photo" key={photo.id}>
            <div className="photo__info">
              <a
                href={photo.user?.portfolio_url}
                className="photo__link"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={photo.user?.profile_image?.medium}
                  className="user__profile"
                  alt={`${photo.user?.username}`}
                />

                <div className="user__info">
                  <p className="user__username">{photo.user?.username}</p>
                  {photo.user.for_hire ? (
                    <p className="user__hire">
                      Available for hire <BsCheckCircleFill />
                    </p>
                  ) : null}
                </div>
              </a>

              <button
                type="button"
                className="btn__download"
                onClick={() => downloadImage(`${photo.urls.raw}`)}
              >
                <BsDownload />
              </button>
            </div>
            <img
              src={photo.urls?.regular || photo.urls?.full || photo.urls?.raw}
              alt={photo.alt_description}
            />
          </div>
        );
      })}
    </>
  );
}

export default Images;
