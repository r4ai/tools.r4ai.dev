"use client"

import { Textarea } from "@nextui-org/react"
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table"
import { useMemo, useState, type FC } from "react"

const Count: FC = () => {
  const [text, setText] = useState("")

  const wordsCount = useMemo(
    () => text.split(/\s+/).filter((word) => word).length,
    [text],
  )
  const charactersCount = useMemo(() => {
    const lang = navigator?.language ?? "en"
    const segmenter = new Intl.Segmenter(lang, { granularity: "grapheme" })
    const segments = segmenter.segment(text)
    return [...segments].length
  }, [text])
  const characterWithoutSpacesCount = useMemo(
    () => text.replace(/\s/g, "").length,
    [text],
  )
  const halfWidthCharactersCount = useMemo(
    () => text.replace(/[^\x00-\xff]/g, "").length,
    [text],
  )
  const fullWidthCharactersCount = useMemo(
    () =>
      text.replace(
        /[^\u{3000}-\u{303F}\u{3040}-\u{309F}\u{30A0}-\u{30FF}\u{FF00}-\u{FFEF}\u{4E00}-\u{9FAF}\u{3400}-\u{4DBF}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{2CEB0}-\u{2EBEF}\u{2F800}-\u{2FA1F}]/gu,
        "",
      ).length,
    [text],
  )
  const linesCount = useMemo(
    () => text.split(/\n/).filter((line) => line).length,
    [text],
  )
  const paragraphsCount = useMemo(
    () => text.split(/\n\n/).filter((paragraph) => paragraph).length,
    [text],
  )
  const sentencesCount = useMemo(
    () => text.split(/\.|\?|!/).filter((sentence) => sentence).length,
    [text],
  )

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="space-y-2 mx-auto">
        <h1 className="text-center text-3xl font-black">Count it!</h1>
        <p className="text-center text-foreground-500">
          Count words, characters, lines, and more.
        </p>
      </div>
      <div className="my-auto flex flex-col gap-6">
        <Textarea
          className="max-w-screen-lg mx-auto px-5"
          placeholder="Type something here..."
          maxRows={20}
          value={text}
          onValueChange={setText}
        />
        <Table hideHeader className="mx-auto max-w-sm mb-6">
          <TableHeader>
            <TableColumn>Item</TableColumn>
            <TableColumn>Count</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="words">
              <TableCell>Words</TableCell>
              <TableCell>{wordsCount}</TableCell>
            </TableRow>
            <TableRow key="characters">
              <TableCell>Characters</TableCell>
              <TableCell>{charactersCount}</TableCell>
            </TableRow>
            <TableRow key="characters-without-spaces">
              <TableCell>Characters (without spaces)</TableCell>
              <TableCell>{characterWithoutSpacesCount}</TableCell>
            </TableRow>
            <TableRow key="half-width-characters">
              <TableCell>Half-width characters</TableCell>
              <TableCell>{halfWidthCharactersCount}</TableCell>
            </TableRow>
            <TableRow key="full-width-characters">
              <TableCell>Full-width characters</TableCell>
              <TableCell>{fullWidthCharactersCount}</TableCell>
            </TableRow>
            <TableRow key="lines">
              <TableCell>Lines</TableCell>
              <TableCell>{linesCount}</TableCell>
            </TableRow>
            <TableRow key="paragraphs">
              <TableCell>Paragraphs</TableCell>
              <TableCell>{paragraphsCount}</TableCell>
            </TableRow>
            <TableRow key="sentences">
              <TableCell>Sentences</TableCell>
              <TableCell>{sentencesCount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
export default Count
