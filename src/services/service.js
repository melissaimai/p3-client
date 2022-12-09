import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005/api"
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const uploadImage = async (file) => {
  try {
    const res = await api.post("/upload", file);
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

const createProduct = async (newProduct) => {
  try {
    const res = await api.post("/products", newProduct);
    return res.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export default {
  getProducts,
  uploadImage,
  createProduct
};






// import axios from 'axios';

// class ExampleService {
//   constructor() {
//     this.api = axios.create({
//       baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
//     });

//     // Automatically set JWT token in the headers for every request
//     this.api.interceptors.request.use((config) => {
//       // Retrieve the JWT token from the local storage
//       const storedToken = localStorage.getItem("authToken");

//       if (storedToken) {
//         config.headers = { Authorization: `Bearer ${storedToken}` };
//       }

//       return config;
//     });
//   }

//   // POST /api/examples
//   createOne = async (requestBody) => {
//     return this.api.post('/api/examples', requestBody);
//   }

//   uploadImage = async (file) => {
//     return this.api.post('/api/upload', file);
//   }

//   createProduct = async (newProduct) => {
//     return this.api.post('/api/products', newProduct);
//   }


//   // GET /api/examples
//   getProducts = async () => {
//     return this.api.get('/api/products');
//   }

//   // GET /api/examples/:id
//   getOne = async (id) => {
//     return this.api.get(`/api/examples/${id}`);
//   }

//   // PUT /api/examples/:id
//   updateOne = async (id, requestBody) => {
//     return this.api.put(`/api/examples/${id}`, requestBody);
//   }

//   // DELETE /api/examples/:id
//   deleteProject = async (id) => {
//     return this.api.delete(`/api/examples/${id}`);
//   }


// }

// // Create one instance of the service
// const exampleService = new ExampleService();

// export default exampleService;