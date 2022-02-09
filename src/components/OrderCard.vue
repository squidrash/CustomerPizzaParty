<template>
  <!-- <div> -->
  <!-- <div id="order-card" class="main">
      <div class="order-card-block">
        <div class="order-card-head">
          <p>{{ order.createTime | orderTime }}</p>
          <p v-if="order.address === undefined">
            Самовывоз из ресторана
          </p>
          <p v-else>
            г. {{ order.address.city }}, ул. {{ order.address.street }}, д.
            {{ order.address.numberOfBuild }}
            <span v-if="order.address.numberOfEntrance !== undefined">
              , под. {{ order.address.numberOfEntrance }}, кв.
              {{ order.address.apartment }}
            </span>
          </p>
          <p>{{ order.status | status }}</p>
        </div>

        <div class="order-card-dishes">
          <table>
            <tbody>
              <tr role="row" v-for="dish in order.dishes" :key="dish.id">
                <td class="first-column">{{ dish.productName }}</td>
                <td class="quantity-column">{{ dish.quantity }}шт.</td>
                <td class="price-column">{{ dish.price * dish.quantity }}₽</td>
              </tr>
            </tbody>
            <tfoot>
              <tr v-if="order.discountSum > 0">
                <td colspan="2" class="first-column">Размер скидки</td>
                <td class="price-column">{{ order.discountSum }}₽</td>
              </tr>
              <tr>
                <td colspan="2" class="first-column">Итого</td>
                <td class="price-column">{{ order.totalSum }}₽</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div> -->

  <div class="main order_card">
    <div class="order_card__head">
      <div class="order_card__head_item">
        {{ order.createTime | orderTime }}
      </div>
      <div v-if="order.address === undefined" class="order_card__head_item">
        Самовывоз из ресторана
      </div>
      <div v-else class="order_card__head_item">
        г. {{ order.address.city }}, ул. {{ order.address.street }}, д.
        {{ order.address.numberOfBuild }}
        <span v-if="order.address.numberOfEntrance !== undefined">
          , под. {{ order.address.numberOfEntrance }}, кв.
          {{ order.address.apartment }}
        </span>
      </div>
      <div class="order_card__head_item">{{ order.status | status }}</div>
    </div>

    <div class="order_card__dishes_list">
      <div class="dishes_list__row" v-for="dish in order.dishes" :key="dish.id">
        <div class="dishes_list__column dishes_list__column_name">
          <div class="dishes_list__item dishes_list__item_name">
            {{ dish.productName }}
          </div>
        </div>
        <div class="dishes_list__column dishes-list__column_quantity">
          <div class="dishes_list__item">{{ dish.quantity }}шт.</div>
        </div>
        <div class="dishes_list__column dishes_list__column_price">
          <div class="dishes_list__item">
            {{ dish.price * dish.quantity }} ₽
          </div>
        </div>
      </div>
    </div>
    <div class="order_card__sum">
      <div v-if="order.discountSum > 0" class="dishes_list__row ">
        <div class="dishes_list__column dishes_list__column_total">
          <div class="dishes_list__item dishes_list__item_name">
            Сумма скидки
          </div>
        </div>
        <div class="dishes_list__column dishes_list__column_sum">
          <div class="dishes_list__item">{{ order.discountSum }} ₽</div>
        </div>
      </div>

      <div class="dishes_list__row dishes_list__row_sum">
        <div class="dishes_list__column dishes_list__column_total">
          <div class="dishes_list__item dishes_list__item_name">
            Итого
          </div>
        </div>
        <div class="dishes_list__column dishes_list__column_sum">
          <div class="dishes_list__item">{{ order.totalSum }} ₽</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: ["order"],
  filters: {
    status(value) {
      if (!value) return "";
      switch (value) {
        case "New":
          return "Новый";

        case "Confirmed":
          return "Подтвержден";

        case "Preparing":
          return "Готовится";

        case "OnTheWay":
          return "В пути";

        case "Delivered":
          return "Доставлен";

        case "Cancelled":
          return "Отменен";
      }
      return "";
    },
    orderTime(value) {
      if (!value) return "";
      var date = new Date(value);

      var options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        timezone: "UTC",
      };

      return date.toLocaleString("ru", options);
    },
  },
};
</script>
