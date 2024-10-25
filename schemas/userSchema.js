export const userSchema = {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      type: 'string',
      title: 'Wallet Address',
    },
    {
      name: 'profileImage',
      type: 'string',
      title: 'Profile Image',
    },
    {
      name: 'bio',
      type: 'string',
      title: 'Bio',
    },
    {
      name: 'isProfileImageNft',
      title: 'Is Profile Image NFT',
      type: 'boolean',
    },
    {
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
    },
    {
      name: 'coverImage',
      type: 'string',
      title: 'Cover Image',
    },
    {
      name: 'following',
      title: 'Following',
      type: 'array',
      of: [{ type: 'string' }], // This will hold wallet addresses of users they are following
    },
    {
      name: 'followers',
      title: 'Followers',
      type: 'array',
      of: [{ type: 'string' }], // This will hold wallet addresses of users who follow them
    },
    {
      name: 'tweets',
      title: 'Tweets',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tweets' }],
        },
      ],
    },
    {
      name: 'likedTweets',
      title: 'Liked Tweets',
      type: 'array',
      of: [{ type: 'string' }], // Stores tweet IDs of liked tweets
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{ type: 'string' }], // Stores tweet IDs of liked tweets
    },
  ],
};
