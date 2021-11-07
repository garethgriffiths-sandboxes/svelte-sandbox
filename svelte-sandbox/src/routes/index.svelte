<svelte:head>
	<title>Svelte Sandbox</title>
	<meta name="description" content="A place to experiment and share new ideas using Svelte." />
</svelte:head>

<script>
	import Form from "../components/Form.svelte";
</script>

<div class="page">
	<div>
		<h1>Svelte Sandbox</h1>
	</div>
	<div>
		<Form />
	</div>
</div>

<style>
	.page {
		margin: 10px;
	}

	h1 {
		font-weight: 400;
	}
</style>
