

import "./sell.css"

const Sell = () => {
  return (
    <div className="register-wrapper">
      <div className="register-inner">
        <form className="register-form" action="">
          <h3>Register a new product</h3>
          <div className="register-form-wrapper">
            <label className="register-label">Upload a picure</label>
            <input type="text" className="form-control" />
          </div>
          <div className="register-form-wrapper">
            <label className="register-label">Title</label>
            <input type="text" className="form-control" />
          </div>
          <div className="register-form-wrapper">
            <label className="register-label">Price</label>
            <input type="number" min="0" className="form-control" />
          </div>
          <div className="register-form-wrapper">
            <label className="register-label">Describe your Item</label>
            <textarea type="textarea" className="form-control" />
          </div>

          <button className="register-btn">Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default Sell;