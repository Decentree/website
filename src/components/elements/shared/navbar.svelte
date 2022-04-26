<script>
import { slide } from 'svelte/transition'
import { quintInOut } from 'svelte/easing'

let header;
let scrolled = false;
let opened = false;

const toggle = () => {
	opened = !opened;

};
const menuItems = [
	{ name: "projects", to: "#projects" },
	{ name: "solutions", to: "#solutions"},
	{ name: "technology", to: "#technology"},
	{ name: "team", to: "#team"},
	{ name: "contact", to: "#contact", button: true},
]
</script>

<div class="fixed top-0 w-full z-30">
	<header
		class="opacity-100 z-30 w-full bg-primary-blue md:bg-opacity-50 py-4 spacing-def flex justify-between items-center backdrop-filter backdrop-blur-sm shadow-md"
	>
		<a href="#" class="flex flex-col justify-center"><img class="w-[90px] h-auto" src="/images/logos/decentree.png" alt="Logo" draggable="false" width="429" height="87"/></a>
		
		<nav class="gap-8 items-center hidden md:flex">
			{#each menuItems as item}
				<a href={item.to} class="text-sm hover:underline {item.button ? 'btn-nav' : ''}">{item.name}</a>
			{/each}
		</nav>
		<button 
			class="hamburger md:hidden bg-transparent border-none"
			ref="hamburger"
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
				<a href={item.to} class="text-lg block my-4" on:click={(e)=>toggle()}>{item.name}</a>
			{/each}
		</nav>
	{/if}

	</header>
	<div class="absolute -bottom-[2px] w-full h-[2px]" style="background: radial-gradient(50% 50% at 50% 50%, #6BB891 49.48%, rgba(196, 196, 196, 0) 100%);"/>
</div>
