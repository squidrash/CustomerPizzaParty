import axios from 'axios'
const url = "https://localhost:5001/api/"

export default {
    menu: {
        async getMenu() {
            return await axios
                .get(url + "menu/fullmenu/")
        },
    }
}