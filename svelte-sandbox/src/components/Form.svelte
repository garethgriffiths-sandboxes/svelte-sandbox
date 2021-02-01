<script>
    import { user } from "../store.js";
    import { requiredValidator } from "../validation/validators.js";
    import { createFieldValidator } from "../validation/field-validator.js";

    const [validity, validate] = createFieldValidator(
        requiredValidator()
    );

    let colourOptions = [
        { name: "", hex: `` },
        { name: "Black", hex: `#000000` },
        { name: "Red", hex: `#FF0000` },
    ];
</script>

<form>
    <label for="firstNameText">First Name</label>
    <input id="firstNameText" type="text" bind:value={$user.firstName} 
    class:field-danger={!$validity.valid} 
    use:validate={user.firstName}/>
    {#if $validity.dirty && !$validity.valid}
    <span class="validation-hint">
	INVALID - {$validity.message} {$validity.dirty}
    </span>
    {/if}
    <label for="lastNameText">Last Name</label>
    <input id="lastNameText" type="text" bind:value={$user.lastName}/>
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
    label {
        margin-top: 20px;
    }

    input {
        outline: none;
        border-width: 2px;
        border-style: dashed;
    }

    .validation-hint {
        color: red;
        padding: 6px 0;
    }

    .field-danger {
        border-color: red;
    }
</style>
