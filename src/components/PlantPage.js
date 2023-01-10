import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(resp => resp.json())
      .then(setPlants)
  }, [])

  const addNewPlant = (myPlant) => {
    setPlants([...plants, myPlant])
  }

  const updateSearch = (searchInput) => {
    setSearchPlant(searchInput)
  }

  let filteredPlants = plants.filter(plant => plant.name.includes(searchPlant))
  //plant => plant.name.toLowerCase().includes(searchPlant.toLowerCase())

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search searchPlant={searchPlant} updateSearch={updateSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
