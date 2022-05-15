<template>
  <div>
    <b-modal
      id="add-to-cart-form"
      size="lg"
      centered
      hide-footer
      hide-header
      @hidden="resetModal"
    >
      <div>
        <button class="close-btn" @click="$bvModal.hide('add-to-cart-form')">
          <b-icon icon="x" font-scale="1.5" variant="secondary"></b-icon>
        </button>
      </div>
      <div class="popup_dish_form">
        <div class="popup_dish_form__column popup_dish_form__column_img">
          <b-card-img :src="dishImage" alt="Image" class="rounded"></b-card-img>
        </div>
        <div class="popup_dish_form__column popup_dish_form__column_info">
          <div class="popup_dish_form__row popup_dish_form__row_title">
            {{ selectDish.productName }}
          </div>
          <div class="popup_dish_form__row popup_dish_form__row_description">
            <p v-if="selectDish.description !== undefined">
              {{ selectDish.description }}
            </p>
            <p v-else>тут будет описание</p>
          </div>
          <div class="popup_dish_form__row popup_dish_form__row_actions">
            <b-form-spinbutton
              v-model="quantity"
              class="row_actions__spinbutton"
              size="sm"
              wrap
              min="1"
              max="10"
              placeholder="--"
            />

            <b-button
              size="sm"
              variant="success"
              @click="add"
              style="width: 110px;"
              class="row_actions__submit_button"
            >
              Добавить <b-icon icon="cart-plus" aria-hidden="true"
            /></b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "AddToCartForm",
  props: ["selectDish"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    dishImage() {
      const image = this.selectDish.image;
      if (image === null || image === undefined || image === "") {
        return "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg";
      } else {
        return `https://localhost:5001/api/DishImage/getDishImage?name=${image}`;
      }
    },
  },
  methods: {
    add() {
      let dish = { ...this.selectDish };
      dish.quantity = this.quantity;
      this.$emit("add-to-cart", dish);
      this.$bvModal.hide("add-to-cart-form");
      this.quantity = 1;
    },
    resetModal() {
      this.quantity = 1;
    },
  },
};
</script>
<style>
.close-btn {
  position: absolute;
  border: 0px;
  background-color: #ffffff;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  padding: 0px;
}
.popup_dish_form {
  display: flex;
  /* border: 2px solid black; */
  width: 100%;
  min-height: 300px;
  /* box-shadow: 0 0 5px; */
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
}
.popup_dish_form__column {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
}
.popup_dish_form__column_img {
  flex: 0 0 40%;
}
.popup_dish_form__column_info {
  flex: 0 0 60%;
  padding: 0 0 0 30px;
}
.popup_dish_form__row {
}
.popup_dish_form__row_title {
  font-size: 30px;
  font-weight: bold;
  padding: 0 0 20px 0;
}
.popup_dish_form__row_description {
  font-size: 16px;
  flex: 1 1 auto;
}
.popup_dish_form__row_actions {
  display: flex;
}

.row_actions__spinbutton {
  max-width: 110px;
  margin: 0 15px 0 0;
}
.row_actions__submit_button {
  /* max-width: 110px; */
  flex: 1 1 auto;
  /* margin: 0 15px 0 0; */
}
.modal-header {
  padding: 0;
}
</style>
