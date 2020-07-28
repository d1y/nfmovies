import cheerio from 'cheerio'
import { pageIndexApiData, baseSingleMovieInterface, pageIndexApiCardItemData } from '@/interface';
import { createFullImgURL } from '@/api/utils';

/**
 * 处理单个卡片数据
 * @param item 卡片 `ele
 */
const dealWithCardItemData = (item: CheerioElement): baseSingleMovieInterface => {
  const ele =  cheerio(item).find('.myui-vodlist__thumb.lazyload')
  let cover = ele.attr('data-original') || ""
  cover = createFullImgURL(cover)
  const api = ele.attr('href') || ""
  const title = ele.attr('title') || ""
  const score = ele.find('.pic-tag.pic-tag-top').text().trim()
  const tips = ele.find('.pic-text.text-right').text().trim()
  const starringString = cheerio(item).find('.myui-vodlist__detail .text.text-overflow.text-muted').text().trim()
  let starring = starringString.slice(3).split(',')
  if (starring.length == 1) {
    const e = starring[0].trim()
    starring = e.split('/').filter(item=> item)
  }
  const result: baseSingleMovieInterface = {
    api,
    title,
    cover,
    score,
    tips,
    starring
  }
  return result
}

/**
 * 首页数据处理
 * @param str `html`片段
 */
export const indexData = (str: string): pageIndexApiData => {
  const result: pageIndexApiData = {
    hots: [],
    cards: []
  }
  const $ = cheerio.load(str)
  const hotLists = Array.from($('.flickity .myui-vodlist__box'))
  const hots: baseSingleMovieInterface[] = hotLists.map(item=> dealWithCardItemData(item))
  result.hots = hots
  const fullCards = Array.from($('.myui-panel-box.clearfix'))
  if (fullCards.length > 2) {
    fullCards.pop()
    fullCards.shift()
    const cards: pageIndexApiCardItemData[] = fullCards.map(item=> {
      const title = $(item).find('h3.title').text().trim()
      const api = $(item).find('.more.text-muted.pull-right').attr('href') || ""
      const lists = Array.from($(item).find('.myui-vodlist__box')).map(item=> dealWithCardItemData(item))
      const r: pageIndexApiCardItemData = {
        title,
        api,
        lists
      }
      return r
    })
    result.cards = cards
  }
  return result
}