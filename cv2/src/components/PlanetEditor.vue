<template>
    <label>
        Name:
        <input v-model="editedPlanet.name" class="rounded border-0" />
    </label>
    <br>
    <label>
        Oxygen percentage:
        <input v-model.number="editedPlanet.oxygenPercentage" class="rounded border-0" />
    </label>
    <br>
    <button class="btn btn-dark m-1" @click="savePlanet()">Save</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Planet } from "./model/Planet"

const props = defineProps<{
    planet?: Planet
}>()

const editedPlanet: Planet = reactive({
    name: "",
    oxygenPercentage: 0,
})

if(props.planet) {
    editedPlanet.name = props.planet.name;
    editedPlanet.oxygenPercentage = props.planet.oxygenPercentage;
}

const emit = defineEmits(['save'])

const savePlanet = () => {
    // add a copy to the planets array (do not mutate the original because it is used in the form)
    const copy = { ...editedPlanet };
    emit('save', copy);
    // reset the editedPlanet to default values and hide the form
    editedPlanet.name = "";
    editedPlanet.oxygenPercentage = 0;
}
</script>