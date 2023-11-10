import { RouteRecordRaw } from 'vue-router'
import APTOrganizeLib from '@views/ThreatKnowledgeBase/APTOrganizeLib/APTOrganizeLib.vue'
import VirusFamilyLib from '@views/ThreatKnowledgeBase/VirusFamilyLib/VirusFamilyLib.vue'
import ThreatOverview from '@views/ThreatKnowledgeBase/ThreatOverview/ThreatOverview.vue'


const route: RouteRecordRaw[] = [
    {
        path: '/home/threat-knowledge-base/apt-organize-lib',
        name: 'apt-organize-lib',
        component: APTOrganizeLib,
        meta: {
            title: 'APT组织库',
            hidden: true
        }
    },
    {
        path: '/home/threat-knowledge-base/virus-family-lib',
        name: 'virus-family-lib',
        component: VirusFamilyLib,
        meta: {
            title: '病毒家族库',
            hidden: true
        }
    },
    {
        path: '/home/threat-knowledge-base/threat-overview',
        name: 'threat-overview',
        component: ThreatOverview,
        meta: {
            title: '漏洞总览',
            hidden: true
        }
    },
]

export default route