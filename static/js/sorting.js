// function to swap two elements
function arraySwap(array, indexA, indexB) {
    var x = array[indexA];
    Vue.set(array, indexA, array[indexB]);
    Vue.set(array, indexB, x);
}

// shuffle function
async function shuffle(a) {
    for (var i = 0; i < a.length; i++) {
        arraySwap(a, i, Math.floor(Math.random() * (i + 1)));
        await sleep();
    }
}

// Bubble Sort
async function bubbleSort(a) {
    var len = a.length;
    for (var i = 0; i < a.length; i++) {
        for (var j = 1; j < a.length - i; j++) {
            liteIt(i, j);
            if (a[j - 1] > a[j]) {
                arraySwap(a, j - 1, j);
            }
            await sleep(0);
            reverseIt(i, j);
        }
    }
}

// Selection Sort
async function selectionSort(a) {
    var minIndex, temp;

    for (var i = 0; i < a.length; i++) {
        minIndex = i;
        for (var j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
            liteIt(i, minIndex);
        }

        arraySwap(a, i, minIndex);
        await sleep(0);
        reverseIt(i, minIndex);
    }

}

// Insertion Sort
async function insertionSort(a) {
    for (var i = 1; i < a.length; i++) {
        var el = a[i], j = i;

        while (j > 0 && a[j - 1] > el) {
            liteIt(j, j-1);
            a[j] = a[j - 1];
            j--;
            await sleep(0);
            reverseIt(j, j+1);
        }
        liteIt(j, i);
        Vue.set(a, j, el);
        await sleep(0);
        reverseIt(j, i);
    }
}
