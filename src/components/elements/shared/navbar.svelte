<script>
import {onMount} from "svelte"
import { slide } from 'svelte/transition'
import { quintInOut } from 'svelte/easing'

import smoothscroll from 'smoothscroll-polyfill'



const scrollTo = (elementId) => {
	if(window.location.pathname.length > 2)
    	window.location = '/#' + elementId
	

	
    window.scroll({
      top:
        document.getElementById(elementId).offsetTop,
      left: 0,
      behavior: 'smooth',
    })

	opened = false

    if (elementId !== 'hero')
      window.history.replaceState(null, null, '#' + elementId)
  }

  onMount(() => {
    smoothscroll.polyfill()
	if(window.location.hash.length > 1) scrollTo(window.location.hash.slice(1,window.location.hash.length));
  })

let opened = false;

const toggle = () => {
	opened = !opened;
};

const menuItems = [
	{ name: "projects", to: "projects" },
	{ name: "solutions", to: "solutions"},
	{ name: "technology", to: "technology"},
	{ name: "team", to: "team"},
	{ name: "contact", to: "contact"},
	{ name: "book a consultation", to: "https://calendly.com/decentree", blank: true, button: true},
]
</script>

<div class="fixed top-0 w-full z-30">
	<header
		class="inset-0 opacity-100 z-30 w-full bg-primary-blue md:bg-opacity-50 py-4 spacing-def flex justify-between items-center backdrop-filter backdrop-blur-sm shadow-md" id="header"
	>
		<a href="/#" on:click|preventDefault={()=>scrollTo("hero")} class="flex flex-col justify-center"><img class="w-[108px] md:w-[113px] lg:w-[123px] h-auto" src="/images/logos/decentree.png" alt="Logo" draggable="false" width="429" height="87"/></a>
		
		<nav class="gap-8 items-center hidden md:flex">
			{#each menuItems as item}
				<a href={"/#" + item.to} on:click|preventDefault={()=>scrollTo(item.to)} class="text-sm hover:underline {item.button ? 'btn-nav' : ''}" target={item.blank ? "_blank" : ""}>{item.name}</a>
			{/each}
		</nav>
		<button 
			class="hamburger md:hidden bg-transparent border-none"
			class:active={opened}
			aria-controls="mobile-nav"
			aria-expanded={opened}
			on:click={toggle}
		>
			<span class="sr-only">Menu</span>
			<svg
				class="w-6 h-6 fill-current text-white"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="4" width="24" height="3" />
				<rect y="11" width="24" height="3" />
				<rect y="18" width="24" height="3" />
			</svg>
		</button>

		{#if opened}
			<nav
			id="mobile-nav"
			on:touchmove|stopPropagation={(e)=>e.preventDefault()}
			transition:slide={{
				delay: 50,
				duration: 450,
				easing: quintInOut,
			}}
			class="
				fixed
				h-screen
				z-0
				left-0
				top-[50px]
				w-full
				bg-primary-blue
				spacing-def
				py-12
				md:hidden
			"
		>
			{#each menuItems as item}
				<a href={"/#" + item.to} on:click|preventDefault={()=>scrollTo(item.to)} class="text-lg block my-4">{item.name}</a>
			{/each}
		</nav>
	{/if}

	</header>
	<div class="absolute -bottom-[2px] w-full h-[2px]" style="background: radial-gradient(50% 50% at 50% 50%, #6BB891 49.48%, rgba(196, 196, 196, 0) 100%);"/>
</div>
