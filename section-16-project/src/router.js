import { createRouter, createWebHistory } from 'vue-router';

import CoachesDetails from './pages/coaches/CoachesDetails.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesRegistration from './pages/coaches/CoachesRegistration.vue';
import ContactCoaches from './pages/requests/ContactCoaches.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter ({
    history:  createWebHistory(),
    routes: [
        { path : '/' , redirect : '/coaches' },
        { path : '/coaches' , components : CoachesList },
        { path : '/coaches/:id' , components : CoachesDetails , children : [
            {  path : '/contect' , components : ContactCoaches }
        ] },
        { path : '/register' , components : CoachesRegistration },
        { path : '/requests' , components : RequestReceived },
        { path : '/:notFound(.*)' , components : NotFound }
    ],
});

export default router;