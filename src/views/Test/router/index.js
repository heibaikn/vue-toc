export default [
    {
        path: '/provide ',
        name: 'provide ',
        component: () => import('../provide ')
    },
    {
        path: '/doubleclick',
        name: 'doubleclick',
        component: () => import('../doubleClick')
    },
    {
        path: '/routerhook',
        name: 'routerhook',
        component: () => import('../router-hook')
    },
    {
        path: '/queueevent',
        name: 'queueevent',
        component: () => import('../queue-event')
    },
]