import axios from "axios";
const url = "https://localhost:5001/api/";

export default {
  menu: {
    async getMenu() {
      return await axios.get(url + "menu/fullmenu/");
    },
  },
  dishCategories: {
    async getCategories() {
      return await axios.get(url + "dishcategory/getCategories");
    },
  },
  specialOffer: {
    async getOffers() {
      return await axios.get(url + "specialOffer/all");
    },
    async checkComplianceSpecialOffer(dishes, promocode) {
      return await axios
        .post(url + `specialOffer/checkOffer?promoCode=${promocode}`, dishes)
        .catch(function(error) {
          if (error.response) {
            return error.response;
          } else if (error.request) {
            return error.request;
          } else {
            return error.message;
          }
        });
    },
  },
  order: {
    async createOrder(order) {
      return await axios.post(url + "order/create/", order);
    },
  },
  customer: {
    async getCustomer(id) {
      return await axios.get(url + `customer/getOne/${id}`);
    },
    async getCustomerWithInfo(id) {
      return await axios.get(url + `customer/getOneWithInfo/${id}`);
    },
    async createCustomerAddress(id, address) {
      return await axios
        .post(url + `customer/createConnection/?customerId=${id}`, address)
        .catch(function(error) {
          if (error.response) {
            return error.response;
          } else if (error.request) {
            return error.request;
          } else {
            return error.message;
          }
        });
    },
    async editCustomerAddress(customerId, oldAddressId, newAddress) {
      return await axios.put(
        url +
          `customer/editConnection/?customerId=${customerId}&oldAddressId=${oldAddressId}`,
        newAddress
      );
    },
    async removeCustomerAddress(customerId, addressId) {
      return await axios.delete(
        url +
          `customer/removeConnection/?customerId=${customerId}&addressId=${addressId}`
      );
    },
  },
  address: {
    async createAddressCustomer(address) {
      return await axios.post(url + `address/create/`, address);
    },
  },
};
