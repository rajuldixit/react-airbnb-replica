const NavContents = ({selectedContentItem}) => {
    return (
      <div className="align-inline">
        <span onClick={() => selectedContentItem('places')}>Places to stay</span>
        <span onClick={() => selectedContentItem('experiences')}>Experiences</span>
        <span onClick={() => selectedContentItem('')}>Online Experiences</span>
      </div>
    );
  };
  
  export default NavContents;
  