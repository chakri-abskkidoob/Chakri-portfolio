import { createWebHashHistory, createRouter } from "vue-router";
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Interests from '../components/Interests'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const routes = [
    {
        path : '/',
        name : 'About',
        component : About
    },
    {
        path : '/experience',
        name : 'Experience',
        component : Experience
    },
    {
        path : '/education',
        name : 'Education',
        component : Education
    },
    {
        path : '/projects',
        name : 'Projects',
        component : Projects
    },
    {
        path : '/certificate',
        name : 'Certifications',
        component : Certifications
    },
    {
        path : '/interests',
        name : 'Interests',
        component : Interests
    },
    {
        path : '/skills',
        name : 'Skills',
        component : Skills
    },
    {
        path : '/contact',
        name : 'Contact',
        component : Contact
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;