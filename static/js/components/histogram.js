Vue.component('histogram', {
    template: '\
        <div>{{newNoOfElements}}</div>\
    ',
    props: {
        newNoOfElements: {
            type: Number,
        },
    }
})