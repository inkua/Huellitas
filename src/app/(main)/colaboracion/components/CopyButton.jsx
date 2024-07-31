import { useState } from "react";

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Error al copiar el texto: ', err)
        }
    };

    return (
        <button onClick={copyToClipboard}>
            {
                copied ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> <path fill='#6C5CE7' d="M20.285 5.705c-.391-.391-1.023-.391-1.414 0L9 15.576l-4.879-4.88c-.391-.39-1.023-.39-1.414 0-.39.391-.39 1.023 0 1.414l5.586 5.586c.391.391 1.023.391 1.414 0l10.586-10.585c.391-.39.391-1.023 0-1.414z" /></svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> <path fill='black' d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V9zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"></path></svg>
            }
        </button>
    )
}

export default CopyButton;