import mock from '../mock'

export const searchArr = [
  {
    groupTitle: 'Pages',
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: 'email',
        isBookmarked: true,
        title: 'Email',
        icon: 'Mail',
        link: '/apps/wanted/seeking'
      },
      {
        id: 2,
        target: 'chat',
        isBookmarked: true,
        title: 'Chat',
        icon: 'MessageSquare',
        link: '/apps/wanted/seeking'
      },
      {
        id: 3,
        target: 'todo',
        isBookmarked: true,
        title: 'Todo',
        icon: 'CheckSquare',
        link: '/apps/wanted/seeking'
      },
      {
        id: 4,
        target: 'calendar',
        isBookmarked: true,
        title: 'Calendar',
        icon: 'Calendar',
        link: '/apps/wanted/seeking'
      },      
      {
        id: 5,
        icon: 'Camera',
        isBookmarked: true,
        target: 'ImageCover',
        link: '/apps/wanted/seeking',
        title: 'Gallery'
      }
    ]
  }
]

// GET Search Data
mock.onGet('/api/main-search/data').reply(() => {
  return [200, { searchArr }]
})

// GET Search Data & Bookmarks
mock.onGet('/api/bookmarks/data').reply(() => {
  const bookmarks = searchArr[0].data.filter(item => item.isBookmarked)
  const suggestions = searchArr[0].data
  return [200, { suggestions, bookmarks }]
})

// POST Update isBookmarked
mock.onPost('/api/bookmarks/update').reply(config => {
  const { id } = JSON.parse(config.data)

  const obj = searchArr[0].data.find(item => item.id === id)

  Object.assign(obj, { isBookmarked: !obj.isBookmarked })

  return [200]
})
