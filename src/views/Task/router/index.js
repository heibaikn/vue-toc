export default [
    {
        path: '/task/overview',
        name: 'taskOverview',
        component: () => import('../task')
    },
    {
        path: '/task/analysis/running',
        name: 'analysisRunning',
        component: () => import('../analysis-running')
    },
    {
        path: '/task/analysis/end',
        name: 'analysisEnd',
        component: () => import('../analysis-end')
    },
]