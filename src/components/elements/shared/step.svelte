<script>
    import ArrowIcon from "./icons/arrow.svelte"
    export let step;
    export let steps;
    export let index;
</script>

<div>
    <div class="flex flex-col md:flex-row md:items-center text-2xl mt-3 gap-10 md:gap-0">
      <div class="w-11 h-11 flex flex-col justify-center items-center bg-gray-700 rounded-full "><span class="transform scale-75 flex flex-col justify-center items-center">{@html step.icon}</span> </div>
      {#if index !== steps.length - 1}<div class="flex -ml-[30px] md:-ml-0">
        <div class="transform rotate-90 md:rotate-0"><ArrowIcon/></div>
        <span class="text-base mt-2 block md:hidden -mt-1 -ml-1">{step.label}</span>
      </div>{/if}
    </div>
    <span class="text-sm mt-2 block hidden md:block">{step.label}</span>
</div>