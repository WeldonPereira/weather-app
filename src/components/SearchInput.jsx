import search_icon from "../assets/search.png";

const SearchInput = ({ inputRef, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch(inputRef.current.value);
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search City..."
        onKeyDown={handleKeyDown}
      />
      <img
        src={search_icon}
        alt="search"
        onClick={() => onSearch(inputRef.current.value)}
      />
    </div>
  );
};

export default SearchInput;
