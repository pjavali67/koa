"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Placeholder from "@tiptap/extension-placeholder"
import {
  Bold,
  Italic,
  UnderlineIcon,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Palette,
  Pilcrow,
} from "lucide-react"

import { Button } from "../ui/button"
import { Toggle } from "../ui/toggle"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Input } from "../ui/input"
import { useState } from "react"

interface TipTapEditorProps {
  content: string
  onChange: (content: string) => void
}

export function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const [linkUrl, setLinkUrl] = useState("")

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: "Write your description here...",
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: "min-h-[200px] focus:outline-none",
      },
    },
  })

  if (!editor) {
    return null
  }

  const setLink = () => {
    if (linkUrl === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run()
    setLinkUrl("")
  }

  const setParagraph = () => {
    editor.chain().focus().setParagraph().run()
  }

  return (
    <div className="border rounded-md">
      <div className="flex flex-wrap gap-1 p-2 border-b">
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          aria-label="Bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>

        <Popover>
          <PopoverTrigger asChild>
            <Toggle size="sm" aria-label="Link">
              <LinkIcon className="h-4 w-4" />
            </Toggle>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex space-x-2">
              <Input placeholder="https://example.com" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
              <Button size="sm" onClick={setLink}>
                Set Link
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        <Toggle size="sm" pressed={editor.isActive("paragraph")} onPressedChange={setParagraph} aria-label="Paragraph">
          <Pilcrow className="h-4 w-4" />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 1 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          aria-label="Heading 1"
        >
          <Heading1 className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("heading", { level: 2 })}
          onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          aria-label="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive("bulletList")}
          onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Bullet List"
        >
          <List className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("orderedList")}
          onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Toggle>

        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "left" })}
          onPressedChange={() => editor.chain().focus().setTextAlign("left").run()}
          aria-label="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "center" })}
          onPressedChange={() => editor.chain().focus().setTextAlign("center").run()}
          aria-label="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "right" })}
          onPressedChange={() => editor.chain().focus().setTextAlign("right").run()}
          aria-label="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive({ textAlign: "justify" })}
          onPressedChange={() => editor.chain().focus().setTextAlign("justify").run()}
          aria-label="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </Toggle>

        <Popover>
          <PopoverTrigger asChild>
            <Toggle size="sm" aria-label="Text Color">
              <Palette className="h-4 w-4" />
            </Toggle>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex flex-wrap gap-1">
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-red-500"
                onClick={() => editor.chain().focus().setColor("#ef4444").run()}
                aria-label="Red"
              />
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-blue-500"
                onClick={() => editor.chain().focus().setColor("#3b82f6").run()}
                aria-label="Blue"
              />
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-green-500"
                onClick={() => editor.chain().focus().setColor("#22c55e").run()}
                aria-label="Green"
              />
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-yellow-500"
                onClick={() => editor.chain().focus().setColor("#eab308").run()}
                aria-label="Yellow"
              />
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-purple-500"
                onClick={() => editor.chain().focus().setColor("#a855f7").run()}
                aria-label="Purple"
              />
              <Button
                variant="outline"
                className="w-8 h-8 p-0 bg-black"
                onClick={() => editor.chain().focus().setColor("#000000").run()}
                aria-label="Black"
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <EditorContent editor={editor} className="p-4 prose prose-sm max-w-none min-h-[300px] overflow-y-auto" />
    </div>
  )
}
export default TipTapEditor