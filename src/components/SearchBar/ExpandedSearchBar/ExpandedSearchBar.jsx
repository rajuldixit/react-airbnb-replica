const ExpandedSearchBar = (props) => {
  const selectedNavContent = props.selectedNavContent === "places" ? "places" : "experiences";
  return (
    <div className="expanded-search-view">
      <div className="location">
        <span>Location</span>
        <input type="text" placeholder="where are you going" />
      </div>
      
      {selectedNavContent === "places" && (
        <div className="duration">
          <span>Check in</span>
          <span>Check out</span>
          <span>Guest</span>
        </div>
      )}

      {selectedNavContent === "experiences" && (
        <div className="date-search">
          <span>Date</span>
        </div>
      )}
      <div className="search-button">
        <button>Search</button>
      </div>
    </div>
  );
};

export default ExpandedSearchBar;
