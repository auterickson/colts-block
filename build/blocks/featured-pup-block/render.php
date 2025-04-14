<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$featured_stamp_url = plugins_url( '../../images/Featuredstampweb.png', __FILE__ );
?>
<div<?php echo get_block_wrapper_attributes(); ?>>
<div class="pup-card">
	<img
		src="https://images.pexels.com/photos/245035/pexels-photo-245035.jpeg?auto=compress&cs=tinysrgb&w=600"
		alt="Basil the dog"
		class="pup-image"
	/>
	<div class="pup-info">
		<h3 class="dog-name">Hi, my name is Basil!</h3>
		<img
			class="stamp"
			src="<?php echo esc_url( $featured_stamp_url ); ?>"
			alt="Paw stamp"
		/>
	</div>
</div>
</div>
