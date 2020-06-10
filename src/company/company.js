const openPage = require('../openPage')
const scrapSection = require('../scrapSection')
const scrollToPageBottom = require('../profile/scrollToPageBottom')
const template = require('./companyScraperTemplate')

const logger = require('../logger')(__filename)

module.exports = async (browser, cookies, url, waitTimeToScrapMs = 500, puppeteerAuthenticate = undefined) => {
  logger.info(`starting scraping url: ${url}`)

  //TODO: implement company scraper
  const page = await openPage({ browser, cookies, url, puppeteerAuthenticate })

  const companyPageIndicatorSelector = '.org-top-card'
  await page.waitFor(companyPageIndicatorSelector, { timeout: 5000 })
    .catch(() => {
      logger.warn('org-top-card selector was not found')
    })

  logger.info('scrolling page to the bottom')
  await scrollToPageBottom(page)

  if(waitTimeToScrapMs) {
    logger.info(`applying 1st delay`)
    await new Promise((resolve) => { setTimeout(() => { resolve() }, waitTimeToScrapMs / 2)})
  }
  // id="organization-feed"
  const posts = await scrapSection(page, template.posts)
  console.log(posts)
}
