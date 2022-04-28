import { Link } from "react-router-dom"

const SingleMovieCard = (props) => {
  return (
    <div>
      <div className="strive-card position-relative">
        <img
          className="w-100 rounded"
          src={props.img}
          alt=""
          style={{ width: "230px", height: "170px", objectFit: "cover" }}
        />

        <div className="infos-container">
          <div className="infos-content">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="play-btn gradient"></div>
              <h6 className="season mb-0 ml-2">Play S1 E1</h6>
              <Link to={"/details/" + props.id}>
                <span
                  className="arr-down text-light position-relative"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  {" "}
                  <i className="bi bi-chevron-down"></i>
                  <p className="position-absolute veiw-info">View Info</p>
                </span>
              </Link>
              {/* <div class="plus-btn ml-auto"></div> */}
            </div>
            <p className="prime-title">Included with Prime</p>
            <h6>{props.title}</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              beatae veritatis, ut sequi dolores debitis illum, odit officiis
              possimus sint ea eaque quis consectetur exercitationem
              reprehenderit ratione delectus error ipsam.
            </p>
            <div className="movie-footer">
              <span>Year: {props.year}</span>
              {/* <i className="bi bi-chat-left-text"></i>
              <i className="bi bi-badge-4k"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMovieCard
