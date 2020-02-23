Vue = require('vue');

require('./bootstrap');
// Global Mixin Functions
require('./global_mixin');
// Registering Components
require('./components');


new Vue({
    el: '#app',
});



