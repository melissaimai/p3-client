
const Search = (props) => {

  return (
    <div>
      <div >
        <div>
          <label htmlFor="name"><input placeholder="Search products..." className="form-control" type="text" value={props.input} onChange={props.handleSearch} required /></label>
        </div>
      </div>
    </div>
  )
}

export default Search;
