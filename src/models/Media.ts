import {Season} from "./Season"
import {Format} from "./Format"

export interface Media {
  id: string
  title: {
    romaji: string
  }
  type: string
  season: Season
  format: Format
  status?: string
  tags?: [{name: string}]
}

