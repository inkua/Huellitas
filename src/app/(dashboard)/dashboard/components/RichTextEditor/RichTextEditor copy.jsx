"use client"

// src/components/RichTextEditor.jsx
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

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(null);
    const [richUtils, setRichUtils] = useState(null);

    useEffect(() => {
        // Initialize the editor state once the component mounts on the client
        import('draft-js').then(mod => {
            setEditorState(mod.EditorState.createEmpty());
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

    if (!editorState) {
        return null;
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
            </Head>
            <div style={{ margin: '20px' }}>
                <button 
                    className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 font-bold'
                    onClick={() => toggleStyle('BOLD')}
                    >N</button>
                
                <button 
                    className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 italic'
                    onClick={() => toggleStyle('ITALIC')}
                    >I</button>
                
                <button 
                    className='px-2 py-1 border-solid rounded-md hover:bg-slate-300 underline'
                    onClick={() => toggleStyle('UNDERLINE')}
                    >S</button>
                
                <div style={{ border: '1px solid #ddd', padding: '10px', minHeight: '200px' }}>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                    />
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;
