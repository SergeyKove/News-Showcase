import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useNewsDetailStore = defineStore('getValue', () => {
  const detailNews = ref([])
  async function getNews(url) {
    const data = await axios.get(url)
    detailNews.value = data.data.data.news
  }

  return {
    detailNews,
    getNews,
  }
})
