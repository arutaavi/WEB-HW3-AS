<template>
  <div class="contact">
    <h2>On technical difficulties or other suggestions please to not hesitate to contact one of our support staff members</h2>
    <img alt="support" src="../assets/support.png"/>
    <contacts> </contacts>
  </div>

</template>

<script>
import contacts from "@/components/contacts.vue";

export default {
  name: "Contact",
  components: { contacts },
};
</script>

<style scoped>
img {
  width: 400px;
}
</style>