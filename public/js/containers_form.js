const { response } = require("express");

const locationOptions = document.getElementById('locationOptions');

fetch('/containers/location')
    .then((response) => response.json())
    .then((locations) => {

        locations.foreach(location => {
            const opiton = document.createElement('option');
            option.value = location;
            locationOptions.appendChild(option);

        });

    });

const drawerOptions = document.getElementById('drawerOptions');

fetch('/containers/drawer')
    .then((response) => response.json())
    .then((drawer) => {

        drawer.foreach(location => {
            const opiton = document.createElement('option');
            option.value = location;
            drawerOptions.appendChild(option);

        });

    });