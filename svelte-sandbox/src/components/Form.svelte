<script>
    import { user } from "../store.js";
    import { requiredValidator } from "../validation/validators.js";
    import { createFieldValidator } from "../validation/field-validator.js";

    const [firstNameValidity, firstNameValidate] = createFieldValidator(
        requiredValidator("First Name")
    );

    let colourOptions = [
        { name: "Blue", hex: `#00B0F0` },
        { name: "Green", hex: `#74B54C` },
        { name: "Pink", hex: `#FF7394` },
        { name: "Orange", hex: `#F07C00` },
        { name: "Black", hex: `#000000` },
    ];

    $user.accentColour = "#74B54C";
</script>

<form>
    <label for="firstNameText">First Name</label>
    <input
        id="firstNameText"
        type="text"
        bind:value={$user.firstName}
        class:danger={!$firstNameValidity.valid}
        use:firstNameValidate={$user.firstName}
        style="--accent-color:{$user.accentColour}"
    />
    {#if $firstNameValidity.dirty && !$firstNameValidity.valid}
        <div class="hint" style="--accent-color:{$user.accentColour}">
            {$firstNameValidity.message}
        </div>
    {/if}
    <label for="lastNameText">Last Name</label>
    <input
        id="lastNameText"
        type="text"
        bind:value={$user.lastName}
        style="--accent-color:{$user.accentColour}"
    />
    <label for="accentColourSelect">Accent Colour</label>
    <select
        id="accentColourSelect"
        class="accent-colour-select"
        bind:value={$user.accentColour}
    >
        {#each colourOptions as colourOption}
            <option
                style="--option-accent-color:{colourOption.hex}"
                class="option"
                value={colourOption.hex}
            >
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
        border-color: var(--accent-color);
    }

    .danger {
        border-color: #ec484f;
    }

    .hint {
        color: #ec484f;
    }

    .accent-colour-select .option {
        color: var(--option-accent-color);
    }
</style>
