import ThreatKnowledgeBase from '@router/ThreatKnowledgeBase/index.ts'

export const createrouter = [
  {
    path: '/',
    name: 'default',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@common/home/home.vue'),
    name: 'home',
    redirect: '/home/report',
    meta: {
      title: '首页',
      icon: 'UserFilled',
      hidden: true
    },
    children: [
      {
        path: '/home/report',
        component: () => import('@views/result/result.vue'),
        name: 'report',
        meta: {
          title: '威胁报告',
          icon: 'Position',
          hidden: true
        }
      },
      {
        path: '/home/threat-knowledge-base',
        name: 'threat-knowledge-base',
        children: [...ThreatKnowledgeBase]
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/result/result.vue'),
    name: '404',
    meta: {
      title: '错误了',
      icon: 'DeleteFilled',
      hidden: true
    },
  },
]