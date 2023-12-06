
const SearchComponent = ({ onSearch }) => {

  //Cuando se realiza una búsqueda en el input, se llama a onSearch con el término de búsqueda.
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <form className="d-flex input-group w-auto mt-5 px-5" >
        <input
          type="search"
          className="form-control"
          placeholder="Buscar producto..."
          aria-label="Search"
          onChange={handleSearchChange}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
