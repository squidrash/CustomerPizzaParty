import axios from 'axios'
const url = "https://localhost:5001/api/"

export default {
    menu: {
        async getMenu() {
            return await axios
                .get(url + "menu/fullmenu/")
        },
    },
    order: {
        async createOrder(order) {
            return await axios
                .post(url + "order/create/", order)
        }
    },
    customer: {
        async getCustomer(id) {
            return await axios
                .get(url + `customer/getOne/${id}`)
        },
        async getCustomerWithInfo(id) {
            return await axios
                .get(url + `customer/getOneWithInfo/${id}`)
        }
    }
}