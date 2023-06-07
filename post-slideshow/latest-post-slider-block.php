<?php

/**
 * Plugin Name: Latest Post Slider
 * Author: Abhishek Patel
 * Version: 1.0.0
 */

function enqueue_block_assets()
{
    wp_enqueue_script(
        'latest-post-slider-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-api-fetch'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );
    wp_enqueue_style(
        'post-slideshow-block-css',
        plugin_dir_url(__FILE__) . 'editor.css',
        array('wp-editor')
    );
}
add_action('enqueue_block_editor_assets', 'enqueue_block_assets');



function enqueue_block_frontend_assets()
{
    wp_enqueue_script('post-slideshow-frontend-script', plugin_dir_url(__FILE__) . '/frontend-slider.js');
    wp_enqueue_style('post-slideshow-frontend-styles', plugin_dir_url(__FILE__) . '/style.css');
}
add_action('enqueue_block_assets', 'enqueue_block_frontend_assets');
