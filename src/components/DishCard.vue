<template>
  <div v-b-hover="handleHover" class="inline-block">
    <div class="dish_card">
      <b-card
        :title="dish.productName"
        :img-src="imageKek"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 320px; 
          max-height: 400px; 
          height: 400px;"
        class="mb-2"
      >
        <div
          class="dish_card__text"
          style="width: 270px; height:60px; text-align:left;"
        >
          <b-card-text v-if="isHovered">
            <p v-if="dish.description === undefined">
              Тут будет какое-то описание блюда. что в него входит и тому
              подобное.
            </p>
            <p v-else>{{ dish.description }}</p>
          </b-card-text>
        </div>

        <b-card-text style="position: absolute; bottom: 20px; text-align: left;"
          >{{ dish.price }}₽
          <b-button
            size="sm"
            v-if="isHovered"
            variant="success"
            @click="addToCart"
          >
            В корзину
          </b-button>
        </b-card-text>
      </b-card>
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
      imageKek:
        "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg",
    };
  },
  methods: {
    handleHover(hovered) {
      this.isHovered = hovered;
    },
    addToCart() {
      this.$emit("add-to-cart", this.dish);
    },
  },
  // async mounted() {
  //   const img = await pizzaApi.menu.getImage(this.dish.image);
  //   if (img !== null || img !== undefined) {
  //     this.imageKek = img.request.responseURL;
  //   }
  // },
  mounted() {
    if (
      this.dish.image === null ||
      this.dish.image === undefined ||
      this.dish.image === ""
    ) {
      this.imageKek =
        "https://www.chefmarket.ru/blog/wp-content/uploads/2019/05/delicious-burger-e1558527589911.jpg";
    } else {
      this.imageKek = `https://localhost:5001/api/DishImage/getImages?name=${this.dish.image}`;
    }
  },
};
</script>
<style>
.dish_card {
  width: 300px;
  height: 400px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px;
  font-size: 16px;

  /* background: #007e3e; */
  color: rgb(8, 8, 8); /* Цвет текста */
  /* padding: 10px;  */
  -moz-border-radius: 5px; /* Для Firefox 3 */
  -webkit-border-radius: 5px; /* Для Safari 4 и Chrome */
  border-radius: 5px; /* Для современных браузеров */
  /* margin: 10px; */
}
.dish_card__text {
  width: 270px;
  height: 100px;
  text-align: left;
  font-size: 14px;
}
</style>
