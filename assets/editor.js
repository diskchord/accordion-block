(function (blocks, blockEditor, element, i18n) {
    const el = element.createElement;
    const __ = i18n.__;
    const useBlockProps = blockEditor.useBlockProps;
    const RichText = blockEditor.RichText;
    const InnerBlocks = blockEditor.InnerBlocks;

    blocks.registerBlockType('legacy/accordion', {
        title: __('Pretty Accordion', 'accordion-block'),
        icon: 'menu',
        category: 'design',
        attributes: {
            header: {
                type: 'string',
                source: 'html',
                selector: '.accordion-title',
            },
        },
        edit: function (props) {
            const blockProps = useBlockProps({ className: 'accordion-item' });

            return el(
                'div',
                blockProps,
                el(
                    'button',
                    {
                        type: 'button',
                        className: 'h4header active',
                        'aria-expanded': 'true',
                    },
                    el(RichText, {
                        tagName: 'span',
                        className: 'accordion-title title',
                        value: props.attributes.header,
                        onChange: function (value) {
                            props.setAttributes({ header: value });
                        },
                        placeholder: __('Accordion header…', 'accordion-block'),
                        allowedFormats: ['core/bold', 'core/italic'],
                    })
                ),
                el(
                    'div',
                    { className: 'panel', style: { maxHeight: 'none' } },
                    el(
                        'div',
                        { className: 'panelinside' },
                        el(InnerBlocks, {
                            template: [[
                                'core/paragraph',
                                { placeholder: __('Accordion content…', 'accordion-block') },
                            ]],
                            templateLock: false,
                        })
                    )
                )
            );
        },
        save: function (props) {
            const blockProps = blockEditor.useBlockProps.save({ className: 'accordion-item' });

            return el(
                'div',
                blockProps,
                el(
                    'button',
                    {
                        type: 'button',
                        className: 'h4header',
                        'aria-expanded': 'false',
                    },
                    el(RichText.Content, {
                        tagName: 'span',
                        className: 'accordion-title title',
                        value: props.attributes.header,
                    })
                ),
                el(
                    'div',
                    { className: 'panel' },
                    el(
                        'div',
                        { className: 'panelinside' },
                        el(InnerBlocks.Content)
                    )
                )
            );
        },
    });
})(window.wp.blocks, window.wp.blockEditor, window.wp.element, window.wp.i18n);
