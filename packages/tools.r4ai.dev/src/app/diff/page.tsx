"use client"

import { DiffEditor } from "@monaco-editor/react"
import { Autocomplete, AutocompleteItem } from "@nextui-org/react"
import { languages } from "monaco-editor"
import { FC } from "react"
import { twMerge } from "tailwind-merge"
import { useEditor } from "../../../hooks/useEditor"

type pageProps = {
  className?: string
}

const Diff: FC<pageProps> = (props) => {
  const { language, setLanguage, editorTheme } = useEditor()

  return (
    <div className={twMerge("h-full flex flex-col gap-6", props.className)}>
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
          {languages.getLanguages().map((lang) => (
            <AutocompleteItem key={lang.id} value={lang.id}>
              {lang.id}
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
      />
    </div>
  )
}
export default Diff
