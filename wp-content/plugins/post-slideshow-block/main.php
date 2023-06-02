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
        false
    );
    wp_enqueue_script(
        'axios',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor'),
        true,
        false
    );
}

add_action('enqueue_block_editor_assets', 'loadMyBlock');
