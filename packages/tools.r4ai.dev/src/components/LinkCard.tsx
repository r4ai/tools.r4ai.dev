"use client"

import { Card, CardBody } from "@nextui-org/react"
import NextLink from "next/link"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type LinkCardProps = {
  className?: string
  href: string
  title: string
  description: ReactNode
}

export const LinkCard: FC<LinkCardProps> = ({
  className,
  href,
  title,
  description,
}) => {
  return (
    <Card className={twMerge(className)} as={NextLink} href={href}>
      <CardBody className="p-4 hover:bg-zinc-600/10 transition">
        <h3 className="font-black text-lg">{title}</h3>
        <div className="mt-2 text-foreground-500 dark:text-foreground-400">
          {description}
        </div>
      </CardBody>
    </Card>
  )
}
