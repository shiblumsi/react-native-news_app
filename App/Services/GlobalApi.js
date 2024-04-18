import { create } from "apisauce";


const api = create({
  baseURL:
    "https://api.thenewsapi.com/v1",
});

const apiKey =
  "?api_token=RVRoZ4rUPWQncSNDrsbmtdYFUSruRsfqaxJnyvOe&locale=us&limit=3";

const getTopHeadline = api.get("/news/top"+apiKey);
export default{
    getTopHeadline
}