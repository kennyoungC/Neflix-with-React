const SingleMovieCard = () => {
  return (
    <div style={{ width: "320px" }}>
      <div className="strive-card position-relative">
        <img
          className="img-fluid w-100 rounded"
          src="https://via.placeholder.com/150"
          alt=""
        />

        <div className="infos-container">
          <div className="infos-content">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="play-btn gradient"></div>
              <h6 className="season mb-0 ml-2">Play S1 E1</h6>
              <span className="arr-down">
                <i className="bi bi-chevron-down"></i>
              </span>
              {/* <div class="plus-btn ml-auto"></div> */}
            </div>
            <p className="prime-title">Included with Prime</p>
            <h6>Nine Perfect Strangers - Season 1</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque,
              beatae veritatis, ut sequi dolores debitis illum, odit officiis
              possimus sint ea eaque quis consectetur exercitationem
              reprehenderit ratione delectus error ipsam.
            </p>
            <div className="movie-footer">
              <span>2021</span>
              <i className="bi bi-chat-left-text"></i>
              <i className="bi bi-badge-4k"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleMovieCard
