<script>
    export let image;
</script>
<a class="block lg:max-w-[47.5%] md:max-h-[350px] lg:max-h-[450px]" href={image.link}>
    <img src={image.src} class="w-full h-full object-cover" alt={image.label} loading="lazy">
    <div class="flex flex-col md:flex-row md:justify-between mt-2">
      <span class="text-lg font-medium">{image.title}</span>
      <span class="text-base text-gray-300">{image.label}</span>
    </div>
  </a>