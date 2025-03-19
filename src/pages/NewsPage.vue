<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-mx-auto" style="width: 1280px">
          <div class="flex">
            <NewsBlock v-for="news in cardNews" :news="news" />
          </div>
          <div class="q-pa-lg flex flex-center">
            <q-pagination v-model="page" :max="pageCount" @update:model-value="getNews">
            </q-pagination>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NewsBlock from '@/components/NewsBlock.vue'
import { useNewsStore } from '@/stores/NewsStore'
import { computed, ref } from 'vue'

const store = useNewsStore()
const page = ref(1)

const cardNews = computed(() => {
  return store.cardNews
})
const pageCount = computed(() => {
  return store.pageCount
})

const getNews = function () {
  store.getNews(page.value)
}
getNews()
</script>
