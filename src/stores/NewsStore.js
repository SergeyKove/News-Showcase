import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const url = 'https://domotekhnika.ru/api/v1/news?page=7'

export const useNewsStore = defineStore('getNews', () => {
  const cardNews = ref([])
  async function getNews() {
    const data = await axios.get(url)
    cardNews.value = data.data.data.news
  }

  return {
    cardNews,
    getNews,
  }
})
