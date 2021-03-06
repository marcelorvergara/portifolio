const Home = () => import("@/Home")
const Erro404 = () => import("@/components/Erro404")
const BackOffice = () => import("@/components/BackOffice")
const Carousel = () => import("@/components/Carousel")
const Clipping = () => import("@/components/Clipping")
const Curriculo = () => import("@/components/Curriculo")
const Resume = () => import("@/components/Resume")
const Memoria = () => import("@/components/Memoria")
const TicketSystem = () => import("@/components/TicketSystem")
const TicketSystemBO = () => import("@/components/TicketSystemBO")

export const routes = [
    {
        path:'*', component: Erro404
    },
    {
        path:'', component: Home,
        children: [
            {  path:'', name: 'Carousel', component: Carousel},
            {  path:'/BackOffice', name: 'BackOffice', component: BackOffice },
            {  path:'/Clipping', name: 'Clipping', component: Clipping },
            {  path:'/Memoria', name: 'Memoria', component: Memoria },
            {  path: '/TicketSystem', name: 'TicketSystem', component: TicketSystem },
            {  path: '/TicketSystemBO', name: 'TicketSystemBO', component: TicketSystemBO },
            {  path:'/Curriculo', name: 'Curriculo', component: Curriculo},
            {  path:'/Resume', name: 'Resume', component: Resume}
        ]
    },

]