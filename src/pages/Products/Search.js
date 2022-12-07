
const Search = (props) => {

  return (
    <div>
      <div >
        <div>
          <label htmlFor="name">Search</label>
          <input type="text" value={props.input} onChange={props.handleSearch} required />
        </div>
      </div>
    </div>
  )
}

export default Search;