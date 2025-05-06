
import axios from "axios";

export const DisneyApi = axios.create({
    baseURL: "https://api.disneyapi.dev"
})