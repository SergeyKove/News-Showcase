<template>
  <q-card class="q-ma-sm" style="width: 45%; max-height: 200px">
    <q-card-section class="row">
      <div class="col-4">
        <q-img style="height: 90%; max-width: 90%; border-radius: 10px" :src="news.image"></q-img>
      </div>
      <div class="col-6 row">
        <span>{{ news.datePublish }}</span>
        <router-link :to="{ path: news.slug }">
          <span>{{ news.shortText }}</span>
        </router-link>
        <span>{{ news.title }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps(['news'])
</script>
