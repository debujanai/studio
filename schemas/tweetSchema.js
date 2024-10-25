export const tweetSchema = {
  name: 'tweets',
  type: 'document',
  title: 'Tweets',
  fields: [
    {
      name: 'tweet',
      type: 'string',
      title: 'Tweet',
    },
    {
      name: 'image',
      type: 'string',
      title: 'Image',
    },
    {
      name: 'timestamp',
      type: 'datetime',
      title: 'Timestamp',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'users' }],
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{ type: 'string' }], 
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'commentText',
              type: 'text',
              title: 'Comment Text',
            },
            {
              name: 'commentAuthor',
              type: 'string', // Store wallet address as a string
              title: 'Comment Author',
            },
            {
              name: 'commentTimestamp',
              type: 'datetime',
              title: 'Comment Timestamp',
            },
            {
              name: 'likes',
              type: 'array',
              title: 'Comment Likes',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
}