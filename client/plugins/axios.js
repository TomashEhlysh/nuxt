import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Ваш базовий URL API
    headers: {
      'Content-Type': 'application/json'
    }
  })

  nuxtApp.provide('axios', api) // Додаємо axios у контекст для доступу в компонентах
})