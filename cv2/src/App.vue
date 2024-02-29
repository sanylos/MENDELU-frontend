<script setup lang="ts">
import { computed, reactive } from "vue";
import type { Planet } from "@/model/Planet"
import PlanetEditor from "./components/PlanetEditor.vue";

enum FormState {
    Hidden,
    Adding,
    Editing
}

const state = reactive<{
    formState: FormState,
    editedPlanet: number
}>({
    formState: FormState.Hidden,
    editedPlanet: -1,
})

const planets: Array<Planet> = reactive([
    {
        name: "🌎 Earth",
        oxygenPercentage: 21,
        inhibitants: ["Tomas"]
    },
    {
        name: "🪐 Saturn",
        oxygenPercentage: 0.01,
        inhibitants: []
    },
])

const editedPlanet: Planet = reactive({
    name: "",
    oxygenPercentage: 0,
    inhibitants: []
})

const totalPlanets = computed<number>(() => planets.length);
const percentageOfHabitablePlanets = computed<number>(() => {
    if (planets.length === 0) {
        return 0;
    }
    const habitablePlanets = planets.filter(planet => planet.oxygenPercentage >= 19 && planet.oxygenPercentage <= 24);
    return (habitablePlanets.length / planets.length) * 100;
});

const savePlanet = (planet: Planet) => {
    if (state.formState == FormState.Adding) {
        planets.push(planet);
    } else {
        planets[state.editedPlanet] = planet;
    }
    state.formState = FormState.Hidden;
    state.editedPlanet = -1;
}

const startPlanetEditing = (index: number) => {
    state.editedPlanet = index;
}

const removePlanet = (planet: Planet) => {
    const index = planets.indexOf(planet);
    planets.splice(index, 1);
}
</script>

<template>
    <div class="">
        <h2>Planets</h2>
        <p>
            <i v-if="totalPlanets === 0">
                We have discovered no planets yet.
            </i>
            <i v-else>
                We have discovered {{ totalPlanets }} planets so far.
            </i>
        </p>
        <p>
            <i v-if="percentageOfHabitablePlanets === 0">
                None of these planets are habitable.
            </i>
            <i v-else>
                Hooray! 🥳
                {{ percentageOfHabitablePlanets.toFixed(1) }}% of these planets are habitable. Let's hop into the rocket! 🚀
            </i>
        </p>
        <div>
            <div class="bg-secondary rounded m-1 d-flex justify-content-between align-items-center"
                v-for="planet, index in planets" :key="planet.name">
                <div>
                    <strong>{{ planet.name }}</strong> with {{ planet.oxygenPercentage }}% oxygen
                </div>
                <div v-if="state.editedPlanet === index">
                    <PlanetEditor :planet="planet" @save="savePlanet"></PlanetEditor>
                </div>
                <div>
                    <button href="#" class="btn btn-danger m-1" @click="startPlanetEditing(index)">EDIT</button>
                    <button href="#" class="btn btn-danger m-1" @click="removePlanet(planet)">×</button>
                </div>
            </div>
        </div>

        <button class="btn btn-secondary m-1" v-if="state.formState === FormState.Hidden"
            @click="state.formState = FormState.Adding">Add planet</button>
        <div v-else class="bg-secondary rounded m-1 p-1">
            <h4>Add planet</h4>
            <PlanetEditor @save="savePlanet"></PlanetEditor>
        </div>
    </div>
</template>

<style scoped></style>
