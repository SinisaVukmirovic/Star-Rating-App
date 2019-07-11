// initial ratings
const ratings = {
    svelte: 5, 
    vue: 3.7,
    react: 1.3,
    angular: 2
}

// total start
const starTotal = 5;

// getting ratings on DOM load
document.addEventListener('DOMContentLoaded', getRatings);

// form elements
const frameworkSelect = document.getElementById('framework-select');
const ratingControl = document.getElementById('rating-control');

// initialize framework and framework select change functionality
let framework;

frameworkSelect.addEventListener('change', (e) => {
    framework = e.target.value;

    // enabling rating control when framework selected 
    ratingControl.disabled = false;

    // selecting the value of the selected framework functionality
    ratingControl.value = ratings[framework];
});

// rating control change functionality after blur event
ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // checking that its under 5
    if (rating > 5) {
        alert('Please rate between 1 and 5');
        return;
    }

    // changing rating
    ratings[framework] = rating;

    getRatings();
});


// get ratings funtionality
function getRatings() {
    // looping over object with a FOR IN loop (FOR OF is for arrays!)
    for (let rating in ratings) {
        // to get the actual value, we use bracket notation
        // console.log(ratings[rating]);

        // to get percentage
        const starPercentage = ratings[rating] / starTotal * 100;
        // console.log(starPercentage);

        // rounding percentage to nearest 10
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // console.log(starPercentageRounded);

        // setting star width based on percentage functionality
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

        // adding an actual number value of the rating
        document.querySelector(`.${rating} .num-rating`).innerHTML = ratings[rating];
    }
}