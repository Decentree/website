<script>
  import { fly, fade } from 'svelte/transition'
  export let opened = false
</script>


<div class="fixed inset-0 h-screen w-screen bg-black/[.5] z-40" on:mousewheel|nonpassive|stopPropagation|preventDefault={()=>{}} on:click={()=>opened=false}  transition:fade={{ duration: 200 }}>
  <button class="absolute right-0 top-[2px] py-5 px-4 text-white bg-transparent border-none text-3xl cursor-pointer">✕</button>
  <div transition:fly={{ y: window.innerHeight, duration: 400 }} class="mt-10 bg-primary-darker h-full rounded-t-lg py-6 px-8 md:py-12 md:px-20 text-left" style=" border-top: 2px solid rgba(107, 184, 145)" on:click|stopPropagation={()=>{}}> 
    <slot/>
  </div>
</div>
