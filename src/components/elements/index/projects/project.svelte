<script lang="ts">
    import { IProject } from "../../../../interfaces/IProject";
    export let project: IProject;
</script>
<a class="block relative bg-primary-blue rounded-md h-[400px] md:h-[550px] rounded-md hover:bg-primary-green transition-colors" href={project.url}>
    <div class="absolute inset-0 px-10 py-12 flex flex-col justify-end bg-gradient-to-tr from-[#090235] z-10">
        <h3 class="text-3xl text-gray-200 md:text-5xl my-0 mb-1">{project.name}</h3>
        <h4 class="text-md md:text-lg text-gray-300 md:text-2xl font-normal my-0 font-medium">{project.category}</h4>
    </div>
    <div class="absolute inset-0 w-full h-full bg-zinc-900 opacity-60 transition-all duration-400 z-5 overlay"></div>
    <img src={project.imagePath} class="absolute inset-0 rounded-md w-full h-full z-0 object-cover" loading="lazy" alt="Project"/>
</a>

<style lang="scss">
    a{
     &:hover{
        h3,h4{
            color:white
        }
        .overlay{
            opacity: 0.3;
        }
     }
    }
</style>