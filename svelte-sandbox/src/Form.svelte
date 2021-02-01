<script>
    import { user } from "./data-store.js";
    let colourOptions = [
        { name: '', hex: `` },
        { name: 'Black', hex: `#000000` },
        { name: 'Red', hex: `#FF0000` }
    ];
</script>

<h4>Forms with Svelte</h4>
<form class="form">
    <label for="firstNameText">First Name</label>
    <input id="firstNameText" type="text" bind:value={$user.firstName} />
    <label for="lastNameText">Last Name</label>
    <input id="lastNameText" type="text" bind:value={$user.lastName} />
    <label for="favouriteColourSelect">Favourite Colour</label>
    <select id="favouriteColourSelect" value={user.favouriteColour}>
        {#each colourOptions as colourOption}
            <option value={colourOption.hex}>
                {colourOption.name}
            </option>
        {/each}
    </select>
</form>

<style>
    .form {
    }
</style>
