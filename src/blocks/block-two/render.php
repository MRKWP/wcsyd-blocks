<?php
/**
 * This is our render area.
 *
 * @package wp-multi-block
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php esc_html_e( 'Block Two – hello from a dynamic block!', 'block-two' ); ?>
</p>
<?php
if ( isset( $attributes ) ) {
	if ( $attributes['show_debug'] ) {
		do_action( 'qm/debug', $attributes );
	}
}
