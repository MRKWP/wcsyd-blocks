/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

import {
    TextControl,
    PanelBody,
    PanelRow,
    ToggleControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { Fragment, useState } from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const {
        example_number,
        example_text,
        example_boolean,
        show_debug
    } = attributes;

	return (
		<Fragment>
            <InspectorControls>
                <PanelBody
                    title={__('Block Settings', 'wp-multi-block-two')}
                    initialOpen={true}
                >
                    <PanelRow>
                        <fieldset>
                            <TextControl
                                label={__('Example Text', 'wp-multi-block-two')}
                                value={example_text}
                                onChange={ ( example_text ) => setAttributes( { example_text } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <TextControl
                                label={__('Example Number', 'wp-multi-block-two')}
                                value={example_number}
                                onChange={ ( example_number ) => setAttributes( { example_number } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                    <PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Example Boolean', 'wp-multi-block-two')}
                                checked={example_boolean}
                                onChange={ () => setAttributes( { example_boolean: !example_boolean } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
					<PanelRow>
                        <fieldset>
                            <ToggleControl
                                label={__('Show Debug in QM', 'wp-multi-block-two')}
                                checked={show_debug}
                                onChange={ () => setAttributes( { show_debug: !show_debug } )}
                                type="text"
                            />
                        </fieldset>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
			<p { ...useBlockProps() }>
				{ __( 'Block Two: hello from the editor!', 'block-two' ) }
			</p>
		</Fragment>
	);
}
