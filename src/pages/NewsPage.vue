<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-mx-auto" style="width: 1280px">
          <div class="flex">
            <NewsBlock v-for="news in cardNews" :news="news" />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import NewsBlock from '@/components/NewsBlock.vue'
import { useNewsStore } from '@/stores/NewsStore'
import { computed } from 'vue'

const store = useNewsStore()

store.getNews()
const cardNews = computed(() => {
  return store.cardNews
})
</script>
