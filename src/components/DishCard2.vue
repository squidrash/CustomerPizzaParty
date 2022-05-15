<template>
  <div v-b-hover="handleHover" class="inline-block">
    <div class="dish_card">
      <div class="dish_card__img">
        <b-img rounded="top" width="300px" :src="dishImage"></b-img>
      </div>
      <div class="dish_card__title">
        {{ dish.productName }}
      </div>
      <div class="dish_card__description">
        <div v-if="isHovered">
          <div v-if="dish.description === undefined">
            Тут будет какое-то описание блюда. что в него входит и тому
            подобное.
          </div>
          <p v-else>{{ dishShortDescription }}</p>
        </div>
      </div>
      <div class="dish_card__row">
        <div class="dish_card__row_price">{{ dish.price }}₽</div>
        <div class="dish_card__row_btn">
          <b-button
            v-if="isHovered"
            size="sm"
            variant="success"
            @click="addToCart"
          >
            В корзину
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import pizzaApi from "@/api/pizzaApi";
export default {
  name: "DishCard",
  props: ["dish"],
  data() {
    return {
      isHovered: false,
      dishImage:
        "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg",
    };
  },
  computed: {
    dishShortDescription() {
      let desc = this.dish.description;

      if (desc.length > 150) {
        return desc.slice(0, 151) + "...";
      } else {
        return desc;
      }
    },
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    addToCart() {
      this.$emit("add-to-cart", this.dish);
    },
  },

  mounted() {
    if (
      this.dish.image === null ||
      this.dish.image === undefined ||
      this.dish.image === ""
    ) {
      this.dishImage =
        "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg";
    } else {
      this.dishImage = `https://localhost:5001/api/DishImage/getDishImage?name=${this.dish.image}`;
    }
  },
};
</script>
<style>
.dish_card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 420px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px;

  /* background: #007e3e; */
  color: rgb(8, 8, 8); /* Цвет текста */
  /* padding: 10px;  */
  -moz-border-radius: 5px; /* Для Firefox 3 */
  -webkit-border-radius: 5px; /* Для Safari 4 и Chrome */
  border-radius: 5px; /* Для современных браузеров */
  /* margin: 10px; */
}
.dish_card__img {
  /* position: absolute; */
  overflow: hidden;
  width: 300px;
  height: 200px;
  max-width: 300px;
  max-height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* padding: 0 0 20px 0; */
  margin: 0 0 10px 0;
}
.dish_card__title {
  font-size: 16px;
  font-weight: bold;
  padding: 0 16px 10px 16px;
}
.dish_card__description {
  flex: 1 0 auto;
  /* z-index: 1; */
  /* height: 100px; */
  /* max-height: 100px; */
  text-align: left;
  line-height: 1.1;
  font-size: 14px;
  padding: 0 16px 16px 16px;
}
.dish_card__row {
  /* position: absolute;

  bottom: 0; */
  height: 47px;
  padding: 0 16px 16px 16px;
  display: flex;
}
.dish_card__row_price {
  flex: 0 1 auto;
  /* position: absolute; */
}
.dish_card__row_btn {
  margin-left: auto;
  /* position: absolute; */
}
.dish_card__text {
  width: 270px;
  height: 100px;
  text-align: left;
  font-size: 14px;
}
</style>
