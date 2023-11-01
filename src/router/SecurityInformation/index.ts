import { RouteRecordRaw } from 'vue-router'
import SecurityInformation from '@views/SecurityInformation/SecurityInformation.vue'
const route: RouteRecordRaw[] = [
  {
    path: '/home/security-information',
    name: 'security-information',
    component: SecurityInformation,
    meta: {
      title: '安全资讯',
      hidden: true
    }
  },
]

export default route