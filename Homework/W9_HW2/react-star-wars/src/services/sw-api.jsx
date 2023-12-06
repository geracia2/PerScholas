// https://swapi.dev/api/people/1/?format=json
// produces an object
// data.starship[0] = 'https://swapi.dev/api/starships/12/'
    // another api address  that needs to be edited with ?format=json at the end to be usable as json
// https://swapi.dev/api/starships/?format=json
    // all starships 
    // data[0].name, 
// useEffect to load this json first then export it with a function

import { useEffect } from "react";

export function GetAllStarships(setApiData) {

    useEffect(() => {
        async function getApiData() {
            try {
                let response = await fetch('https://swapi.dev/api/starships/?format=json')
                let data =  await response.json()
                setApiData(data.results)
                console.log('all starships array:')
                console.log(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        getApiData();
    }, [])
}