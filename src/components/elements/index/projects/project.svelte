<script lang="ts">
    import { IProject } from "../../../../interfaces/IProject";
    export let project: IProject;
</script>
<div class="relative bg-primary-blue rounded-md h-[400px] md:h-[550px] ">
    <div class="absolute inset-0 px-10 py-6 flex flex-col justify-end bg-gradient-to-tr from-[#090235] z-10">
        <h3 class="text-3xl md:text-5xl my-0 mb-1">{project.name}</h3>
        <h4 class="text-lg md:text-2xl font-normal my-0 font-medium">{project.category}</h4>
        <p class="mt-1 text-sm md:text-lg">{project.description}</p>
    </div>
    <div class="absolute inset-0 w-full h-full bg-zinc-900 bg-opacity-60 z-5"></div>
    <img src={project.imagePath} class="absolute inset-0 rounded-md w-full h-full z-0 object-cover" loading="lazy" alt="Project"/>
</div>