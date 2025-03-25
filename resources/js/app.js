import "./bootstrap";

import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Layout from "./layouts/Layout.vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

createInertiaApp({
    title: (title) => `My App ${title}`,
    description: "My App Description",
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];

        // let page = pages[`./Pages/${name}.vue`];
        // page.default.layout = page.default.layout || Layout;
        // return page;

        if (!page) {
            console.error(`Page not found: ${name}`);
        }

        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
    // progress: false,
    // progress: {
    //     // The delay after which the progress bar will appear, in milliseconds...
    //     // delay: 250,
    //     delay: 10,

    //     // The color of the progress bar...
    //     // color: "#29d",
    //     color: "red",

    //     // Whether to include the default NProgress styles...
    //     includeCSS: true,

    //     // Whether the NProgress spinner will be shown...
    //     showSpinner: false,
    // },
});
