"use client"

import Editor from "@monaco-editor/react"
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react"
import { languages } from "monaco-editor"
import { FC } from "react"
import { twMerge } from "tailwind-merge"
import { useEditor } from "../../../hooks/useEditor"

type pageProps = {
  className?: string
}

const Diff: FC<pageProps> = (props) => {
  const {
    editorRef,
    language,
    setLanguage,
    editorTheme,
    handleEditorDidMount,
  } = useEditor({ defaultLanguage: "json" })

  const handleFormatClick = () => {
    editorRef.current?.trigger(null, "editor.action.formatDocument", undefined)
  }

  return (
    <div className={twMerge("h-full flex flex-col gap-6", props.className)}>
      <h1 className="mx-auto text-3xl font-black">Format it!</h1>
      <div className="mx-auto flex items-center gap-8">
        <Autocomplete
          label="Select a language"
          className="max-w-xs"
          variant="bordered"
          selectedKey={language}
          onSelectionChange={(key) => setLanguage(key as string)}
        >
          {languages.getLanguages().map((lang) => (
            <AutocompleteItem key={lang.id} value={lang.id}>
              {lang.id}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Button
          className="max-w-xs"
          color="primary"
          size="lg"
          onClick={handleFormatClick}
        >
          Format
        </Button>
      </div>
      <Editor
        className="flex-1"
        theme={editorTheme}
        defaultLanguage="json"
        options={{
          formatOnType: true,
          formatOnPaste: true,
          minimap: {
            enabled: false,
          },
        }}
        language={language}
        onMount={handleEditorDidMount}
      />
    </div>
  )
}
export default Diff
