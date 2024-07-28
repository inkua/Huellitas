import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('../components/RichTextEditor/RichTextEditor'), { ssr: false })

function Editor() {
    return (
        <div>
            <h1 className="text-emerald-900">Editor de texto</h1>
            <div className="text-black">
                <RichTextEditor />
            </div>
        </div>
    )
}

export default Editor
