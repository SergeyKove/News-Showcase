import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const url = 'https://domotekhnika.ru/api/v1/news'

export const useNewsStore = defineStore('getNews', () => {
  const cardNews = ref([])
  const pageCount = ref('')
  async function getNews(pageNumber) {
    const data = await axios.get(url, { params: { page: pageNumber } })
    cardNews.value = data.data.data.news
    pageCount.value = data.data.data.pageCount
  }

  return {
    cardNews,
    pageCount,
    getNews,
  }
})
