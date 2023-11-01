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
        component: () => import('@views/ThreatReport/ThreatReport.vue'),
        name: 'report',
        meta: {
          title: '报告检索',
          icon: 'Position',
          hidden: true
        }
      },
      {
        path: '/home/threat-knowledge-base',
        name: 'threat-knowledge-base',
        children: [...ThreatKnowledgeBase]
      },
      {
        path: '/home/security-information',
        name: 'security-information',
        component: () => import('@views/SecurityInformation/SecurityInformation.vue'),
        meta: {
          title: '安全资讯',
          hidden: true
        }
      },
      {
        path: '/home/intelligence-sandbox',
        name: 'intelligence-sandbox',
        component: () => import('@views/IntelligenceSandbox/IntelligenceSandbox.vue'),
        meta: {
          title: '情报沙箱',
          hidden: true
        }
      },
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