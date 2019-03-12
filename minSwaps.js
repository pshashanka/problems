// Complete the lilysHomework function below.
function lilysHomework(arr) {
    const map = {}, sorted = []
    arr.forEach((v, i) => { map[v] = i; sorted[i] = v;});
    sorted.sort((a, b) => (a - b));
    const stSwaps = sortSwaps(arr.slice(0), Object.assign({}, map), sorted);
    const revSwaps = sortSwaps(arr.slice(0), Object.assign({}, map), sorted.reverse());
    return Math.min(stSwaps, revSwaps);
}



function sortSwaps(arr, map, sorted) {
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            swaps += 1
            const k = map[sorted[i]];
            map[arr[i]] = k;
            const temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
        }
    }


    return swaps
}
