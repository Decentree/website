
<script lang="ts">
	import { Navigation, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/svelte';

	import { IProject } from '../../../interfaces/IProject';
	import Project from "../../elements/index/projects/project.svelte"

	import { breakpoints } from "../../../constants/swiper-breakpoints";
	
    import 'swiper/scss';
	import 'swiper/scss/navigation';

	export let projects: IProject[];
	
</script>

<span id="projects"></span>
<h2 class="spacing-def pt-15 text-3xl md:text-4xl">Our Projects</h2>
<section class="grid-def bg-primary-blue relative">
	<div class="element-def py-4">
		<Swiper
			spaceBetween={20}
			modules={[Navigation, A11y]}
			navigation
			slidesPerView={2}
			breakpoints={breakpoints}
		>	
			{#each projects as project,index}
				<SwiperSlide>
					<div  >
						<Project project={project}/>
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>
</section>
