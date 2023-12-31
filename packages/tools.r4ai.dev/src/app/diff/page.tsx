"use client"

import { DiffEditor } from "@monaco-editor/react"
import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { FC } from "react"
import { useEditor } from "../../../hooks/useEditor"

const Diff: FC = () => {
  const {
    language,
    setLanguage,
    editorTheme,
    availableLanguages,
    handleEditorBeforeMount,
  } = useEditor()

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="mx-auto">
        <h1 className="text-3xl font-black">Diff it!</h1>
      </div>
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
      </div>
      <DiffEditor
        className="flex-1"
        theme={editorTheme}
        language={language}
        options={{
          formatOnType: true,
          formatOnPaste: true,
          minimap: {
            enabled: false,
          },
          enableSplitViewResizing: true,
          originalEditable: true,
        }}
        beforeMount={handleEditorBeforeMount}
      />
    </div>
  )
}
export default Diff
