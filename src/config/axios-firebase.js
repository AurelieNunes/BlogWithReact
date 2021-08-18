import axios from 'axios';

const instance = axios.create ({
    baseURL : 'https://blog-react-6626d-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;