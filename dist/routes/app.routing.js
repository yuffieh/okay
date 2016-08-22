"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('../landing/landing.component');
var about_component_1 = require('../about/about.component');
var home_component_1 = require('../home/home.component');
var appRoutes = [
    {
        path: '',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map