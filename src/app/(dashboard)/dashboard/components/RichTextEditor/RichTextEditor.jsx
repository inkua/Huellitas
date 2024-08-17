"use client"

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import 'draft-js/dist/Draft.css';


// Import dynamically to ensure SSR compatibility
const Editor = dynamic(
    () => import('draft-js').then(mod => mod.Editor),
    { ssr: false }
);
const EditorState = dynamic(
    () => import('draft-js').then(mod => mod.EditorState),
    { ssr: false }
);
const RichUtils = dynamic(
    () => import('draft-js').then(mod => mod.RichUtils),
    { ssr: false }
);

const RichTextEditor = ({data}) => {
    const {editorState, setEditorState} = data
    const [richUtils, setRichUtils] = useState(null);


    useEffect(() => {
        // Initialize the editor state once the component mounts on the client
        import('draft-js').then(mod => {
            //setEditorState(mod.EditorState.createEmpty());
            setRichUtils(mod.RichUtils);
        });
    }, []);

    const handleKeyCommand = (command, editorState) => {
        if (!richUtils) return 'not-handled';
        const newState = richUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const toggleStyle = (style) => {
        if (!richUtils) return;
        setEditorState(richUtils.toggleInlineStyle(editorState, style));
    };

    const toggleBlockType = (blockType) => {
        if (!richUtils) return;
        setEditorState(richUtils.toggleBlockType(editorState, blockType));
    };

    if (!editorState) {
        return null;
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <div style={{ margin: '0px' }} className='bg-white text-primaryColor border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600' >
                <div style={{ borderBottom: '1px solid #ddd'}}>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid text-[16px] rounded-md hover:bg-slate-300'
                        onClick={() => toggleBlockType('header-one')}
                    >H1</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md text-[15px] hover:bg-slate-300'
                        onClick={() => toggleBlockType('header-two')}
                    >H2</button>

                    {/* <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md text-[14px] hover:bg-slate-300'
                        onClick={() => toggleBlockType('header-three')}
                    >H3</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md text-[13px] hover:bg-slate-300'
                        onClick={() => toggleBlockType('header-four')}
                    >H4</button> */}

                    <span className='px-3 py-1 text-gray-300'>|</span>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 font-bold'
                        onClick={() => toggleStyle('BOLD')}
                    >N</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 italic'
                        onClick={() => toggleStyle('ITALIC')}
                    >It</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 underline'
                        onClick={() => toggleStyle('UNDERLINE')}
                    >S</button>

                    <span className='px-3 py-1 text-gray-300'>|</span>

                    <button
                    type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300'
                        onClick={() => toggleBlockType('unstyled')}
                    >Párrafo</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300'
                        onClick={() => toggleBlockType('blockquote')}
                    >Nota</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300'
                        onClick={() => toggleBlockType('ordered-list-item')}
                    >OL</button>

                    <button
                        type='button'
                        className='px-2 py-1 border-solid rounded-md hover:bg-slate-300'
                        onClick={() => toggleBlockType('unordered-list-item')}
                    >UL</button>
                </div>


                <div className='text-black p-[10px] min-h-[200px] max-h-[250px] overflow-y-scroll'>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                        blockStyleFn={(block) => {
                            const type = block.getType();
                            switch (type) {
                                case 'header-one':
                                    return 'header-one';
                                case 'header-two':
                                    return 'header-two';
                                case 'header-three':
                                    return 'header-three';
                                case 'header-four':
                                    return 'header-four';
                                case 'blockquote':
                                    return 'blockquote';
                                case 'unordered-list-item':
                                    return 'unordered-list-item';
                                case 'ordered-list-item':
                                    return 'ordered-list-item';
                                default:
                                    return null;
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;
