

<script>
    import Image from "../../../elements/shared/image.svelte";
    import SolutionModal from "./solution-modal.svelte";
    import Step from "../../shared/step.svelte"
    import Tag from "../../shared/tag.svelte";
    import SolutionImage from "../../shared/solutionimage.svelte";
    import SmartContracts from "../solutions/smartcontracts.svelte"
    import SmallArrow from "../../shared/icons/small_arrow.svelte"
    
    export let position
    export let longDesc
    export let length
    export let name
    export let imgPath
    export let images
    export let tags
    export let steps

    let opened = false
    let prevBodyPosition;
    let prevBodyOverflow;
    let prevBodyWidth;

    
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100%';
  };

  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || '';
    document.body.style.top = '';
    document.body.style.overflow = prevBodyOverflow || '';
    document.body.style.width = prevBodyWidth || '';
    window.scrollTo(0, scrollY);
  };

  const openModal = () => {
    opened = true;
    disableScroll();
  }
</script>

<div>
  <a class="block min-h-[350px] md:min-h-[450px] w-full bg-secondary-blue rounded-md relative solution" href="#" on:click|preventDefault={()=>openModal()}>
    <div class="absolute inset-0 w-full h-full flex flex-col justify-end z-1 text-left px-8">
     
      <span class="text-primary-green font-bold text-lg">{position}/{length}</span>
      <h3 class="mt-2 text-3xl uppercase max-w-[100px] min-h-[100px]">{name}</h3>
      <SmallArrow className="text-gray-300 w-5 -mt-12 mb-5 block"/>
    </div>
   
    <Image path={imgPath} className="inset-0 absolute w-full h-full object-cover rounded-md" alt={name} loading="lazy" fallback="png" />
  </a>
  {#if opened}
    <SolutionModal bind:opened on:close={()=>enableScroll()}>
      <h1 class="text-3xl md:text-5xl mb-4">{name}</h1>
      <p class="text-base md:text-md text-gray-300 mt-0 mb-8">{longDesc}</p>
      <div class="flex justify-between mt-8 flex-wrap gap-y-6">
        {#if tags.length > 0}
          <div class="md:w-2/5"> 
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
            <div class="flex flex-col md:flex-row flex-wrap gap-8 md:gap-0">
              {#each steps as step, index}
                <Step index={index} step={step} steps={steps}/>
              {/each}
            </div>
          </div>
        {/if}  
      </div>
      {#if images.length > 0}
        <div class="flex flex-wrap mt-10 mb-20 lg:mb-0 justify-center lg:justify-between gap-x-10 gap-y-20">
          {#each images as image}
            <SolutionImage image={image}/>
          {/each}
        </div>
      {/if}

      {#if name === "Smart Contracts"}
        <SmartContracts/>
      {/if}
    </SolutionModal>
  {/if}
</div>

<style lang="scss">
    .solution {
        transition: filter 0.3s ease-in-out;
        &:hover {
            filter: drop-shadow(3px 2px 10px #6BB891);
        }
    }
</style>