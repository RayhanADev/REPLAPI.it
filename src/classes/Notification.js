let headers = require('../utils/headers.js');
let variables = require('../utils/variables.js');

class Notifications {
	async postReplyNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query RepliedToPostNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on RepliedToPostNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
	
	async commentReplyNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query RepliedToCommentNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on RepliedToCommentNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
	
	async postMentionedNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query MentionedInPostNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on MentionedInPostNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
	
	async commentMentionedNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query MentionedInCommentNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on MentionedInPostNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}

	async answerNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query AnswerAcceptedNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on AnswerAcceptedNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
	
	async multiplayerInviteNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query MultiplayerInvitedNotification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on MultiplayerInvitedNotification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
	
	async allNotification(after, count) {
		if (!global.cookies) {
			throw new Error('Not logged in.');
		} else {
			headers.Cookie = global.cookies;
			let info = await variables
				.fetch('https://staging.repl.it/graphql', {
					method: 'POST',
					headers,
					body: JSON.stringify({
						query: `
            query Notification($after: String!, $count: Int!) {
              notifications(after: $after, count: $count) {
                items {
                  ... on Notification {
                    id
                    url
                    text
                    seen
                    context
                    creator {
                      ${variable.userAttributes}
                    }
                    timeCreated
                    timeUpdated
                  }
                }
                pageInfo {
                  nextCursor
                }
              }
            }`,
						variables: {
							after,
							count
						}
					})
				})
				.then(res => res.json());

			if (!info.data.notifications) {
				throw new Error(`Cannot fetch notifications.`);
			} else {
				return info.data.notifications;
			}
		}
	}
}

module.exports = {
	Notifications: Notifications
};
