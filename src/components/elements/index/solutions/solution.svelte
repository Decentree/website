

<script>
    import Image from "../../../elements/shared/image.svelte";
    import SolutionModal from "./solution-modal.svelte";
    import ArrowIcon from "../../shared/icons/arrow.svelte"
    import Tag from "../../shared/tag.svelte";
    export let position
    export let length
    export let name
    export let imgPath
    export let tags
    export let steps
    let opened = false
</script>

<div>
    <a class="block min-h-[350px] md:min-h-[450px] w-full bg-secondary-blue rounded-md relative solution" href="#" on:click|preventDefault={()=>opened = true}>
        <div class="absolute inset-0 w-full h-full flex flex-col justify-end z-1 text-left px-8">
            <span class="text-primary-green font-bold text-lg">{position}/{length}</span>
            <h3 class="my-2 text-3xl uppercase max-w-[100px] min-h-[100px]">{name}</h3>
        </div>
        <Image path={imgPath} className="inset-0 absolute w-full h-full object-cover rounded-md" alt={name} loading="lazy"
            fallback="png" />
    </a>
    {#if opened}
        <SolutionModal bind:opened>
            <h1 class="text-3xl md:text-4xl mb-2">Mobile apps</h1>
            <p class="text-base md:text-md text-gray-300 mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis justo nisl. Cras bibendum tellus eu lectus interdum, non ultrices risus hendrerit. Duis facilisis elementum dignissim. Suspendisse at ornare erat, eget lacinia nulla.</p>
            <div class="flex justify-between mt-4 flex-wrap gap-y-6">
            {#if tags.length > 0}
                <div class="md:w-3/5"> 
                  <span class="text-primary-green uppercase font-medium">What We do</span>
                 <div class="mt-3 flex flex-wrap gap-2 ">
                    {#each tags as tag}
                    <Tag tagName={tag}/>
                    {/each}
                  </div>
                </div>
                {/if}
                  {#if steps.length > 0}
                <div>
                  <span class="text-primary-green uppercase font-medium">The process</span>
              
                  <div class="flex flex-wrap">
                    {#each steps as step, index}
                      <div>
                          <div class="flex items-center text-2xl mt-3">
                            <div class="w-10 h-10 flex flex-col justify-center items-center bg-warm-gray-700 rounded-full">{@html step.icon} </div>
                            {#if index !== steps.length - 1}<ArrowIcon/>{/if}
                          </div>
                          <span class="text-sm mt-2 block">{step.label}</span>
                      </div>
                     {/each}
                  </div>
                
                </div>
                {/if}
            </div>
        </SolutionModal>
    {/if}
</div>

<style lang="scss">
    .solution {
        transition: filter 0.3s ease-in-out;

        &:hover {
            filter: drop-shadow(3px 2px 10px #43efff);
        }
    }
</style>