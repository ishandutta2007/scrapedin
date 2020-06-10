module.exports = {
  posts: {
    selector: 'div[id=organization-feed] div div div.social-details-social-activity div[class=social-details-social-counts]',
    fields: {
      reactions: 'li[class=social-details-social-counts__reactions',
      comments: 'li[class=social-details-social-counts__comments',
      views: 'li[class=social-details-social-counts__item',
    }
  },
}