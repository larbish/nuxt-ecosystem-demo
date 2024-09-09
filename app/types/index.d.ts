import type { ParsedContent } from '@nuxt/content'
import type { Badge } from '#ui/types'

export interface Article extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
}
