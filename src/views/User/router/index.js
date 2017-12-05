const User = () => import('../User')
const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

export default [
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/user/:id',
        component: User,
        children: [
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            { path: '', component: UserHome },

            // UserProfile will be rendered inside User's <router-view>
            // when /user/:id/profile is matched
            { path: 'profile', component: UserProfile },

            // UserPosts will be rendered inside User's <router-view>
            // when /user/:id/posts is matched
            { path: 'posts', component: UserPosts }
        ]
    }
]