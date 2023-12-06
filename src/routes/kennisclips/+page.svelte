<script>
  import Header from "$lib/molecules/header.svelte";
import Kennisclips from "$lib/organisms/kennisclips.svelte";
import Footer from "$lib/molecules/footer.svelte";

    export let data
</script>

<Header />
<Kennisclips data={data}/>
<Footer />