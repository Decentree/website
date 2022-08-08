<script>
    import ArrowIcon from "./icons/arrow.svelte"
    export let step;
    export let steps;
    export let index;
</script>

<div>
    <div class="flex items-center text-2xl mt-3">
      <div class="w-11 h-11 flex flex-col justify-center items-center bg-gray-700 rounded-full"><span class="transform scale-75 flex flex-col justify-center items-center">{@html step.icon}</span> </div>
      {#if index !== steps.length - 1}<ArrowIcon/>{/if}
    </div>
    <span class="text-sm mt-2 block">{step.label}</span>
</div>