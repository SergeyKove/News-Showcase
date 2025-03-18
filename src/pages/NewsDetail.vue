<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex q-ma-xl">
        <div class="column">
          <div class="text-h4 q-mb-md">
            {{ detailNews.shortText }}
          </div>
          <div class="flex row">
            <div class="col-3 q-mr-md">
              <q-img
                style="max-width: 100%; max-height: 100%; border-radius: 10px"
                :src="detailNews.image"
              ></q-img>
            </div>
            <div class="col-5" v-html="detailNews.text"></div>
          </div>
          <div class="q-mt-sm">
            <router-link to="/">
              <q-btn label="Назад"> </q-btn>
            </router-link>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useNewsDetailStore } from '@/stores/NewsDetailStore'
import { computed } from 'vue'
const props = defineProps({
  slug: String,
})
const urlValue = 'https://domotekhnika.ru/api/v1/news/'
const url = urlValue + props.slug

const store = useNewsDetailStore()

store.getNews(url)
const detailNews = computed(() => {
  return store.detailNews
})
</script>
