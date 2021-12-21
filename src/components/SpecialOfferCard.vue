<template>
<div>
  <div class="special-offer-card">
    <b-card
      overlay
      :img-src="image"
      img-height="130px"
      img-alt="Card Image"
      text-variant="white"
      :title="specialOffer.name"
      @click="showDescription=true"
    >
      <b-card-text style="text-align: left">
        {{specialOffer.promoCode}}
      </b-card-text>
    </b-card>
    </div>

  <b-modal 
    v-model="showDescription" 
    scrollable 
    centered
    :title="specialOffer.name" 
    hide-footer
  >
    {{specialOffer.description}}
  </b-modal>
</div>
</template>

<script>
export default {
    name: 'SpecialOfferCard',
    props:['specialOffer'],
    data(){
        return {
            offerName : "NameOffer",
            image: "https://klopotenko.com/wp-content/uploads/2019/08/Ratatyj_siteWeb.jpg",
            showDescription: false
        }
    },
    methods:{
      test(){
        console.log("тест нажатия на акцию")
      }
    
    }
    
}
</script>