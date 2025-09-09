export const apiReference = {
  'Health': [
    {
      'method': 'GET',
      'name': 'Basic health check',
      'endpoint': '/v1/health',
      'description': 'Quick system health check',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Detailed health check',
      'endpoint': '/v1/health/detailed',
      'description': 'Provides extended system health details',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Readiness probe',
      'endpoint': '/v1/health/ready',
      'description': 'Checks if service is ready to receive traffic',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Liveness probe',
      'endpoint': '/v1/health/live',
      'description': 'Verifies service is alive and running',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Database health check',
      'endpoint': '/v1/health/database',
      'description': 'Validates database connectivity',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'System stats',
      'endpoint': '/v1/health/system',
      'description': 'Returns server/system usage metrics',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'System health status',
      'endpoint': '/v1/health/status?page=1&limit=20',
      'description': 'Paginated system health status',
      'published': true
    }
  ],
  'Auth': [
    {
      'method': 'POST',
      'name': 'Login',
      'endpoint': '/v1/auth/login',
      'description': 'Authenticate with email & password',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get User Data',
      'endpoint': '/v1/auth/user/:rightStepsId',
      'description': 'Fetch user profile by RightSteps ID',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Current User Info',
      'endpoint': '/v1/auth/me',
      'description': 'Get currently logged-in user\u2019s details',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Logout',
      'endpoint': '/v1/auth/logout',
      'description': 'Invalidate session/logout',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Magic Link Verification',
      'endpoint': '/v1/auth/magic-link/verify',
      'description': 'Verify authentication token from email link',
      'published': true
    }
  ],
  'Profile': [
    {
      'method': 'GET',
      'name': 'Get Profile',
      'endpoint': '/v1/profile',
      'description': 'Retrieve logged-in user\u2019s profile',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Update Profile',
      'endpoint': '/v1/profile',
      'description': 'Update profile details, bio, social links, etc.',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Search Users',
      'endpoint': '/v1/profile/search/users?query=john&limit=5',
      'description': 'Search users for mentions',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Check Username Availability',
      'endpoint': '/v1/profile/username/check?username=john_smith_123',
      'description': 'Verify if a username is available',
      'published': true
    }
  ],
  'Community': [
    {
      'method': 'POST',
      'name': 'Submit Community Request',
      'endpoint': '/v1/communities/requests',
      'description': 'Submit request to create a new community',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Pending Requests (Admin)',
      'endpoint': '/v1/communities/requests/pending?page=1&limit=20',
      'description': 'Fetch pending community creation requests',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Approve Community Request',
      'endpoint': '/v1/communities/requests/:id/approve',
      'description': 'Admin approves a community creation request',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Reject Community Request',
      'endpoint': '/v1/communities/requests/:id/reject',
      'description': 'Admin rejects a community creation request',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Communities',
      'endpoint': '/v1/communities?page=1&limit=20&type=public',
      'description': 'Browse public communities',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get My Communities',
      'endpoint': '/v1/communities?page=1&limit=20&type=my',
      'description': 'Get user\u2019s joined communities',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Community Details',
      'endpoint': '/v1/communities/:id',
      'description': 'Fetch details of a specific community',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Join Public Community',
      'endpoint': '/v1/communities/:id/join',
      'description': 'Join a community',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Leave Community',
      'endpoint': '/v1/communities/:id/leave',
      'description': 'Leave a community',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Create Community (Admin)',
      'endpoint': '/v1/communities/create',
      'description': 'Admin creates a new community',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Promote Member to Admin',
      'endpoint': '/v1/communities/:id/members/:userId/promote',
      'description': 'Promote a community member to admin',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Demote Admin to Member',
      'endpoint': '/v1/communities/:id/members/:userId/demote',
      'description': 'Demote an admin to regular member',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Request Join Private Community',
      'endpoint': '/v1/communities/:id/join-request',
      'description': 'Request to join a private community',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Pending Join Requests',
      'endpoint': '/v1/communities/:id/join-requests',
      'description': 'Fetch pending join requests for a community',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Approve Join Request',
      'endpoint': '/v1/communities/:id/join-requests/:requestId/approve',
      'description': 'Community admin approves join request',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Reject Join Request',
      'endpoint': '/v1/communities/:id/join-requests/:requestId/reject',
      'description': 'Community admin rejects join request',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Generate Invite Link',
      'endpoint': '/v1/communities/:id/invite-link',
      'description': 'Generate invite link',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Join via Invite Link',
      'endpoint': '/v1/communities/join/:token',
      'description': 'Join community via invite link',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Admin Community Overview',
      'endpoint': '/v1/communities/admin/overview?page=1&limit=20',
      'description': 'Admin overview of managed communities',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Community by Slug',
      'endpoint': '/v1/communities/slug/:slug',
      'description': 'Fetch community details via slug',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Delete Community',
      'endpoint': '/v1/communities/:id/delete',
      'description': 'Remove a community',
      'published': true
    }
  ],
  'Friends': [
    {
      'method': 'POST',
      'name': 'Send Friend Request',
      'endpoint': '/v1/friends/requests/send',
      'description': 'Send a friend request',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Received Friend Requests',
      'endpoint': '/v1/friends/requests/received?page=1&limit=20&status=PENDING',
      'description': 'Get friend requests received',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Sent Friend Requests',
      'endpoint': '/v1/friends/requests/sent?page=1&limit=20&status=PENDING',
      'description': 'Get friend requests sent',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Accept Friend Request',
      'endpoint': '/v1/friends/requests/:requestId/accept',
      'description': 'Accept a friend request',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Reject Friend Request',
      'endpoint': '/v1/friends/requests/:requestId/reject',
      'description': 'Reject a friend request',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Cancel Friend Request',
      'endpoint': '/v1/friends/requests/:requestId/cancel',
      'description': 'Cancel pending friend request',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Friends List',
      'endpoint': '/v1/friends?page=1&limit=20',
      'description': 'Retrieve all friends',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Remove Friend',
      'endpoint': '/v1/friends/:friendId/remove',
      'description': 'Remove an existing friend',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Check Friendship Status',
      'endpoint': '/v1/friends/:userId/status',
      'description': 'Check if user is a friend',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Search User',
      'endpoint': '/v1/friends/search?query=Aria&page=1&limit=5',
      'description': 'Search users by name',
      'published': true
    }
  ],
  'Chat': [
    {
      'method': 'POST',
      'name': 'Create Direct Conversation',
      'endpoint': '/v1/chat/conversations/direct',
      'description': 'Start a new direct chat with a friend',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get User Conversations',
      'endpoint': '/v1/chat/conversations?page=1&limit=20',
      'description': 'Retrieve user\u2019s conversations',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Send Message',
      'endpoint': '/v1/chat/conversations/:conversationId/messages',
      'description': 'Send message in a conversation',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Messages',
      'endpoint': '/v1/chat/conversations/:conversationId/messages?page=1&limit=50',
      'description': 'Get messages in a conversation',
      'published': true
    },
    {
      'method': 'PUT',
      'name': 'Edit Message',
      'endpoint': '/v1/chat/messages/:messageId',
      'description': 'Edit an existing message',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Delete Message',
      'endpoint': '/v1/chat/messages/:messageId',
      'description': 'Delete a message',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Mark Messages as Read',
      'endpoint': '/v1/chat/conversations/:conversationId/read',
      'description': 'Mark messages as read',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get User Presence',
      'endpoint': '/v1/chat/presence/:userId',
      'description': 'Get presence/online status of a user',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Community Conversation',
      'endpoint': '/v1/chat/communities/:communityId/conversation',
      'description': 'Fetch a community conversation thread',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Send Community Message',
      'endpoint': '/v1/chat/communities/:communityId/messages',
      'description': 'Send a message in a community',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Community Messages',
      'endpoint': '/v1/chat/communities/:communityId/messages?page=1&limit=50',
      'description': 'Get messages in a community',
      'published': true
    },
    {
      'method': 'PATCH',
      'name': 'Edit Community Message',
      'endpoint': '/v1/chat/communities/:communityId/messages/:messageId',
      'description': 'Edit a community message',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Delete Community Message',
      'endpoint': '/v1/chat/communities/:communityId/messages/:messageId',
      'description': 'Delete a community message',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Message Thread',
      'endpoint': '/v1/chat/messages/:messageId/thread?page=1&limit=20',
      'description': 'Get thread replies to a message',
      'published': true
    }
  ],
  'Posts': [
    {
      'method': 'POST',
      'name': 'Create Post',
      'endpoint': '/v1/posts',
      'description': 'Create a new post',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Create Poll Post',
      'endpoint': '/v1/posts',
      'description': 'Create a poll post',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Posts',
      'endpoint': '/v1/posts?page=1&limit=20',
      'description': 'Fetch posts with optional filters',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Feed \u2013 Public',
      'endpoint': '/v1/posts/feed?page=1&limit=20&type=public',
      'description': 'Public posts feed',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Feed \u2013 Following',
      'endpoint': '/v1/posts/feed?page=1&limit=20&type=following',
      'description': 'Posts from friends feed',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Feed \u2013 Community',
      'endpoint': '/v1/posts/feed?page=1&limit=20&type=community&communityId=...',
      'description': 'Posts from specific community',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Single Post',
      'endpoint': '/v1/posts/:postId',
      'description': 'Fetch a single post',
      'published': true
    },
    {
      'method': 'PUT',
      'name': 'Update Post',
      'endpoint': '/v1/posts/:id',
      'description': 'Update an existing post',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Delete Post',
      'endpoint': '/v1/posts/:id',
      'description': 'Delete a post',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Like Post',
      'endpoint': '/v1/posts/like',
      'description': 'Like a post',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Report Post',
      'endpoint': '/v1/posts/report',
      'description': 'Report inappropriate content',
      'published': true
    }
  ],
  'Media': [
    {
      'method': 'POST',
      'name': 'Upload Media',
      'endpoint': '/v1/media/upload',
      'description': 'Upload images or videos',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Attach Media to Post',
      'endpoint': '/v1/media/attach-to-post',
      'description': 'Attach uploaded media to a post',
      'published': true
    }
  ],
  'Comments': [
    {
      'method': 'POST',
      'name': 'Create Comment/Reply',
      'endpoint': '/v1/comments/posts/:postId/comments',
      'description': 'Create a comment or reply with @mentions and #hashtags',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Comments Thread',
      'endpoint': '/v1/comments/posts/:postId/comments?page=1&limit=20',
      'description': 'Get paginated comments thread for a post',
      'published': true
    },
    {
      'method': 'PUT',
      'name': 'Update Comment',
      'endpoint': '/v1/comments/comments/:commentId',
      'description': 'Update comment content (author only)',
      'published': true
    },
    {
      'method': 'DELETE',
      'name': 'Delete Comment',
      'endpoint': '/v1/comments/comments/:commentId',
      'description': 'Delete comment and all replies (author or admin)',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Like/Unlike Comment',
      'endpoint': '/v1/comments/comments/like',
      'description': 'Toggle like status on a comment',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Report Comment',
      'endpoint': '/v1/comments/comments/report',
      'description': 'Report comment for moderation review',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Comment Replies',
      'endpoint': '/v1/comments/comments/:commentId/replies?page=1&limit=10',
      'description': 'Get paginated replies for a specific comment',
      'published': true
    }
  ],
  'Notifications': [
    {
      'method': 'GET',
      'name': 'Get Notifications',
      'endpoint': '/v1/notifications?page=1&limit=20',
      'description': 'Fetch all notifications',
      'published': true
    },
    {
      'method': 'GET',
      'name': 'Get Unread Notifications',
      'endpoint': '/v1/notifications?page=1&limit=20&unreadOnly=true',
      'description': 'Fetch only unread notifications',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Mark Notifications as Read',
      'endpoint': '/v1/notifications/mark-read',
      'description': 'Mark selected notifications as read',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Mark All Notifications Read',
      'endpoint': '/v1/notifications/mark-all-read',
      'description': 'Mark all notifications as read',
      'published': true
    },
    {
      'method': 'POST',
      'name': 'Delete Notification',
      'endpoint': '/v1/notifications/:id/delete',
      'description': 'Delete a specific notification',
      'published': true
    }
  ]
};
