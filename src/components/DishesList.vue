<template>
  <div class="dishes_list">
    <div class="dishes_list__row" v-for="dish in dishes" :key="dish.id">
      <div class="dishes_list__column dishes_list__column_name">
        <div class="dishes_list__item dishes_list__item_name">
          {{ dish.productName }}
        </div>
      </div>
      <div class="dishes_list__column dishes-list__column_quantity">
        <div class="dishes_list__item" @click="editDishes(dish)">
          <b-form-spinbutton
            style="width: 8rem"
            size="sm"
            v-model="dish.quantity"
            min="0"
            max="10"
          />
        </div>
      </div>
      <div class="dishes_list__column dishes_list__column_price">
        <div class="dishes_list__item">{{ dish.price * dish.quantity }} ₽</div>
      </div>
    </div>
    <div class="dishes_list__row ">
      <div class="dishes_list__column dishes_list__column_total">
        <div class="dishes_list__item dishes_list__item_name">
          Сумма скидки
        </div>
      </div>
      <div class="dishes_list__column dishes_list__column_sum">
        <div class="dishes_list__item">{{ discountSum }} ₽</div>
      </div>
    </div>

    <div class="dishes_list__row dishes_list__row_sum">
      <div class="dishes_list__column dishes_list__column_total">
        <div class="dishes_list__item dishes_list__item_name">
          Итого
        </div>
      </div>
      <div class="dishes_list__column dishes_list__column_sum">
        <div class="dishes_list__item">{{ cartTotalSum - discountSum }} ₽</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DishesList",
  props: ["dishes", "discountSum"],
  computed: {
    cartTotalSum() {
      let result = [];

      for (let dish of this.dishes) {
        result.push(dish.price * dish.quantity);
      }

      result = result.reduce(function(sum, el) {
        return sum + el;
      });

      return result;
    },
  },
  methods: {
    editDishes(dish) {
      console.log("тест изменения и удаления");
      this.$emit("edit-dishes");
      if (dish.quantity === 0) {
        console.log("метод edit в компоненте dishesList");
        console.log("Id блюда");
        console.log(dish.id);
        this.$emit("remove-dish", dish.id);
      }
    },
  },
};
</script>
