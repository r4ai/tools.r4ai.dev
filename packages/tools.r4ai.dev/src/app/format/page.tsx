"use client"

import { Editor } from "@monaco-editor/react"
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete"
import { Button } from "@nextui-org/button"
import { FC } from "react"
import { useEditor } from "../../../hooks/useEditor"

const Diff: FC = () => {
  const {
    editorRef,
    availableLanguages,
    language,
    setLanguage,
    editorTheme,
    handleEditorBeforeMount,
    handleEditorDidMount,
  } = useEditor({ defaultLanguage: "json" })

  const handleFormatClick = () => {
    editorRef.current?.trigger(null, "editor.action.formatDocument", undefined)
  }

  return (
    <div className="h-full flex flex-col gap-6">
      <h1 className="mx-auto text-3xl font-black">Format it!</h1>
      <div className="mx-auto flex items-center gap-8">
        <Autocomplete
          label="Select a language"
          className="max-w-xs"
          variant="bordered"
          selectedKey={language}
          onSelectionChange={(key) => setLanguage(key as string)}
        >
          {availableLanguages.map((lang) => (
            <AutocompleteItem key={lang} value={lang}>
              {lang}
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
        beforeMount={handleEditorBeforeMount}
        onMount={handleEditorDidMount}
      />
    </div>
  )
}
export default Diff
