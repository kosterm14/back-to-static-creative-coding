<script>

  import Header from "$lib/molecules/header.svelte";
  import Tekenmethodes from "$lib/organisms/tekenmethodes.svelte";
  import Footer from "$lib/molecules/footer.svelte";
    export let data;
</script>

<Header />
<Tekenmethodes data={data}/>
<Footer />

