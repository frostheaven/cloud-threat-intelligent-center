import { defineStore } from 'pinia';
import { getDataAPI } from '@/api/index'
let threatData = defineStore('system', {
  state: () => {
    return {
      
    }
  },

  actions: {
    getData() {
      
      getDataAPI().then((res) => {
        console.log(res);

      })

      return 
    },
  },

  getters: {

  }
})



export default threatData