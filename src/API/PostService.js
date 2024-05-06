import axios from "axios";

let app_key = "&app_key=765cc50521d4984aed10379b0ee9f35c"
let app_id = "&app_id=288d4201"
let prompt = "&q=Chicken"
let type = "?type=public"

export default class PostService {

    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('https://api.edamam.com/api/recipes/v2' + type + app_id + app_key + prompt, {
            params: {
                _limit: limit,
                _page: page
            }
        })
        // console.log(response)
        return response;
    }

    static async getById(id) {
        const response = await axios.get("https://api.edamam.com/api/recipes/v2/"+ id + type + app_id + app_key)
        // const response = await axios.get("https://api.edamam.com/api/recipes/v2/8d3e4b9299664a1ca8e6f5bdb8532300?type=public&app_id=288d4201&app_key=765cc50521d4984aed10379b0ee9f35c")
        // console.log(response)
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response;
    }
}
