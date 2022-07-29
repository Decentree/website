
<script>
  export let path
  export let className
  export let alt
  export let width
  export let height
  export let loading
  export let style
  export let fallback
</script>
<picture>
	<source srcset={"/images/" + path + '.avif'} type="image/avif" />
	<source srcset={"/images/" + path + '.webp'} type="image/webp" />
	<img
		src={"/images/" + path + '.' + fallback || "jpeg"}
		alt={alt}
		class={className || ""}
		draggable={false}
		width={width}
		height={height}
		style={style || ""}
		loading={loading || "lazy"}
  />
</picture>