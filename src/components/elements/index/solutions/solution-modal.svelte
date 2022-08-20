<script>
  import { fly, fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte';
 
  const dispatch = createEventDispatcher();

  export let opened = false

  const close = () => {
    opened = false;
    dispatch("close");
  }

</script>



<div class="fixed inset-0 h-screen w-screen bg-black/[.5] z-40 " on:mousewheel|nonpassive|stopPropagation|preventDefault={()=>{}} on:click={()=>close()} transition:fade={{ duration: 200 }}>
  <button class="absolute right-0 top-[-12px] py-4 px-10 text-white bg-transparent border-none text-xl cursor-pointer">✕</button>
  <div transition:fly={{ y: window.innerHeight, duration: 400 }} class="mt-8 bg-primary-darker !overflow-y-scroll h-full rounded-t-lg py-6 pb-28 spacing-def md:px-30 text-left" style=" border-top: 4px solid rgba(107, 184, 145)" on:mousewheel|nonpassive|stopPropagation={()=>{}} on:click|stopPropagation={()=>{}}> 
    <slot/>
  </div>
</div>
