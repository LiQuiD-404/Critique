import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2MyZTA2NTlmODczOTMxZjE3M2RhODFkMjJkMzhjYyIsInN1YiI6IjY1MjNkY2VjMGNiMzM1MTZmNzQ0MTlkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b7_OqI4oTABqf_3kYjUB7gZxnSJESHSFX7E1ApmW4O0";

const headers = {
    Authorization: "bearer " + token
};

export const fetchDataFromApi = async (url,params) => {
    try {
        const response = await axios.get(
            baseUrl + url,
            {headers,
            params}
            )
            return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}