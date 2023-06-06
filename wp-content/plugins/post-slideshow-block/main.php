<?php

/**
 * Plugin Name: Post Slideshow
 * Author: Abhishek Patel
 * Version: 1.0.0
 */

function loadMyBlock()
{
    wp_enqueue_script(
        'post-slideshow-block',
        plugin_dir_url(__FILE__) . '/js/post-slideshow-block.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor'),
        true,
        true
    );
    wp_enqueue_style(
        'post-slideshow-block-css',
        plugin_dir_url(__FILE__) . '/css/post-slideshow-block.css',
        array('wp-editor')
    );
}

add_action('enqueue_block_editor_assets', 'loadMyBlock');


function enqueue_custom_block_frontend_styles()
{
    wp_enqueue_script('custom-block-frontend-script', plugin_dir_url(__FILE__) . '/js/frontend-slider.js');
    wp_enqueue_style('custom-block-frontend-styles', plugin_dir_url(__FILE__) . '/css/post-slideshow-block.css');
}
add_action('enqueue_block_assets', 'enqueue_custom_block_frontend_styles');
