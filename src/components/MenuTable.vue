<template>
  <div>
    <div class="special-offer-block">
      <div v-for="offer in offers" :key="offer.id">
        <special-offer-card :specialOffer="offer" />
      </div>
    </div>

    <div class="categories-block">
      <b-nav>
        <b-nav-item
          v-for="c in dishes"
          :key="c.categoryId"
          v-scroll-to="`#${c.categoryName}`"
        >
          {{ c.categoryName }}
        </b-nav-item>
      </b-nav>
    </div>

    <div
      class="dishes-block"
      v-for="category in dishes"
      :key="category.categoryId"
    >
      <h1
        :id="category.categoryName"
        style="width: 100%;
                text-align:left;
                margin-left: 10px;"
      >
        {{ category.categoryName }}
      </h1>

      <dish-card
        v-for="dish in category.dishes"
        :key="dish.id"
        :dish="dish"
        @add-to-cart="addToCartForm"
      />
    </div>

    <div>
      <add-to-cart-form :selectDish="currentDish" @add-to-cart="addToCart" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DishCard from "@/components/DishCard.vue";
import SpecialOfferCard from "@/components/SpecialOfferCard.vue";
import AddToCartForm from "@/components/AddToCartForm.vue";

export default {
  name: "MenuTable",
  components: {
    DishCard,
    AddToCartForm,
    SpecialOfferCard,
  },
  data() {
    return {
      quantity: 1,
      currentDish: {},
    };
  },
  computed: {
    ...mapState({
      dishes: "menu",
      categories: "categories",
      offers: "specialOffers",
    }),
    category() {
      return this.dishes.category;
    },
  },
  methods: {
    ...mapActions([
      // 'addToCartVX',
      "getMenu",
      "getOffers",
      "getCategories",
    ]),
    // для модуля корзины
    ...mapActions("cartM", ["addToCartVX"]),

    addToCart(dish) {
      this.addToCartVX(dish);
    },
    addToCartForm(dish) {
      this.currentDish = dish;
      this.$bvModal.show("add-to-cart-form");
    },
  },
  mounted() {
    this.getMenu();
    this.getOffers();
  },
};
</script>
