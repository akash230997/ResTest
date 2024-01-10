console.log("Custom Script!!!");

const SearchSubmit = document.getElementById('SearchSubmit');
SearchSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("SearchSubmit --------->>>")
    let getSearchValue = document.getElementById('getSearchValue');
    console.log("getSearchValue : ", getSearchValue.value);
    // if(getSearchValue.value === "salesforce"){

    // }
    getSearchValue.value = "";
})
