<?php
/**
 * Plugin Name: Accordion Block
 * Description: Adds a customizable accordion block using the legacy color scheme.
 * Version: 1.0.7
 * Author: Peppe
 * Requires at least: 6.1
 * Requires PHP: 7.4
 */

if (! defined('ABSPATH')) {
    exit;
}

function accordion_block_register(): void
{
    $base_url  = plugin_dir_url(__FILE__);
    $base_path = plugin_dir_path(__FILE__);

    wp_register_script(
        'accordion-block-editor',
        $base_url . 'assets/editor.js',
        [
            'wp-blocks',
            'wp-block-editor',
            'wp-components',
            'wp-element',
            'wp-i18n',
        ],
        filemtime($base_path . 'assets/editor.js')
    );

    wp_register_script(
        'accordion-block-view',
        $base_url . 'assets/view.js',
        [],
        filemtime($base_path . 'assets/view.js'),
        true
    );

    wp_register_style(
        'accordion-block-style',
        $base_url . 'assets/style.css',
        [],
        filemtime($base_path . 'assets/style.css')
    );

    register_block_type('legacy/accordion', [
        'api_version'   => 2,
        'editor_script' => 'accordion-block-editor',
        'style'         => 'accordion-block-style',
        'editor_style'  => 'accordion-block-style',
        'view_script'   => 'accordion-block-view',
    ]);
}
add_action('init', 'accordion_block_register');

function accordion_block_enqueue_frontend_assets(): void
{
    if (is_admin()) {
        return;
    }

    wp_enqueue_script('accordion-block-view');
}
add_action('wp_enqueue_scripts', 'accordion_block_enqueue_frontend_assets');
