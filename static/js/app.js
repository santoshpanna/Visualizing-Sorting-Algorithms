Vue.config.devtools = true

Vue.use(VueNumberInput);

var sortApp = new Vue({

    el: '#app',

    data: {
        // initial no of elements
        oldNoOfElements : 10,
        newNoOfElements : 10,

        selectedSortAlgorithm : "",

        delayValue : 350,

        // line style
        line : {
            width: '12px',
            marginRight : '2px',
            position : 'relative',
            bottom : '0px',
            border : 'none',
            backgroundColor : '#AE394B',
            borderRadius : '12px',
            flexGrow : '0',
            flexShrink : '0',
            padding: '0',
        },

        // initial value in array
        array: [38, 27, 99, 45, 57, 68, 71, 88, 105, 94],

        // algorithms
        sortAlgorithms: [ "BUBBLE SORT", "SELECTION SORT", "INSERTION SORT"],

        sortAlgorithmsFunctions: {
            "BUBBLE SORT": bubbleSort,
            "SELECTION SORT": selectionSort,
            "INSERTION SORT": insertionSort,
        },
    },

    mounted () {
        this.genRandom()
    },

    methods: {

        // shuffle the numbers
        shuffle: function () {
            shuffle(this.array);
        },

        // sort the numbers
        sort: function () {
            console.log(this.selectedSortAlgorithm)
            this.sortAlgorithmsFunctions[this.selectedSortAlgorithm](this.array);
        },

        callResponse: function() {
            responsive(this.newNoOfElements);
        },

        // generate random numbers
        genRandom : function() {
            var i;
            this.array.splice(this.newNoOfElements)
            // faster than creating new array everytime
            if(this.newNoOfElements > this.oldNoOfElements) {
                for(i=this.oldNoOfElements; i<this.newNoOfElements; i++) {
                    Vue.set(this.array, i, Math.floor((Math.random() * 500) + 1));
                }    
            }
            this.oldNoOfElements = this.newNoOfElements;

            // assigning class for responsive bars/lines
            // 160 = padding for array-to-be-sorted
            responsive(this.newNoOfElements);
        }

    },

    vuetify: new Vuetify({
        theme: {
            dark: true,
        },
    }),
});
