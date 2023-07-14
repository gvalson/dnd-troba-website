<script>
 import { onMount, onDestroy } from 'svelte'
 import { editorHtml } from './stores.js'
 import { Editor } from '@tiptap/core'
 import StarterKit from '@tiptap/starter-kit'
 import Document from '@tiptap/extension-document'
 import Paragraph from '@tiptap/extension-paragraph'
 import Text from '@tiptap/extension-text'
 import Heading from '@tiptap/extension-heading'

 let element
 let editor

 onMount(() => {
     editor = new Editor({
	 element: element,
	 extensions: [
	     StarterKit,
	     Document,
	     Paragraph,
	     Text,
	     Heading.configure({
		 levels: [2, 3, 4],
	     }),
	 ],
	 content: '<p>ზონდთა კავშირში ქურდები არიან!</p><p>მოიტაცეს შეშეჩეუნთ!</p>',
	 autofocus: true,
	 injectCss: false,
	 onTransaction: () => {
	     // force re-render so `editor.isActive` works as expected
	     editor = editor
	 },
     })
 })

 onDestroy(() => {
     if (editor) {
	 editor.destroy()
     }
 })

</script>

<button class="white-b" on:click={() => $editorHtml = editor.getHTML()}>შენახვა store</button>

{#if editor}
    <div id="editorControls">
	<button class="control-b"
		class:active={editor.isActive("heading", { level: 2 })} on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
	    H2
	</button>
	<button class="control-b"
		class:active={editor.isActive("heading", { level: 3 })} on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
	    H3
	</button>
	<button class="control-b"
		class:active={editor.isActive("heading", { level: 4 })} on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
	    H4
	</button>
	<button class="control-b"
		class:active={editor.isActive("orderedList")} on:click={() => editor.chain().focus().toggleOrderedList().run()}>
	    OL
	</button>
	<button class="control-b"
		class:active={editor.isActive("bulletList")} on:click={() => editor.chain().focus().toggleBulletList().run()}>
	    UL
	</button>
    </div>
{:else}
    <div class="error">
	<p>Could not load the editor :(</p>
    </div>
{/if}

<div id="editor" bind:this={element} />

<style>
 #editor {
     background-color: olive;
     width: 50%;
     padding-left: 15px;
     padding-right: 15px;
 }
 #editorControls {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     padding: 5px;
     border: double 5px #261302;
     border-radius: 8px;
     background-color: #FEF4EC;
     width: 50%;
 }
 .control-b {
     padding: 5px;
     font-family: inherit;
     font-size: 1em;
     background-color: #FEF4EC;
     border: solid 2px #261302;
     border-radius: 8px;
     cursor: pointer;
     font-weight: bold;
     width: 50px;
 }
 .active {
     background-color: #261302;
     color: #FEF4EC;
 }
 @media screen and (max-width:900px) {
     #editor {
	 width: inherit;
     }
     #editorControls {
	 width: inherit;
     }
 }
</style>
