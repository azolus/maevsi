import { IntrospectionQuery } from 'graphql'
export default {
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'AccountDeletePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountEmailAddressVerificationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordChangePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordResetPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountPasswordResetRequestPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountRegistrationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AccountRegistrationRefreshPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AuthenticatePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'jwt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Contact',
        fields: [
          {
            name: 'accountUsername',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'authorAccountUsername',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'emailAddress',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'emailAddressHash',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'firstName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'invitationsByContactId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'InvitationsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'lastName',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'phoneNumber',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'url',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'ContactsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ContactsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Contact',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ContactsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Contact',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventGroupPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGroup',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventGroupingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupByEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupingsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateInvitationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitation',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitationEdge',
            type: {
              kind: 'OBJECT',
              name: 'InvitationsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicturesEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadByUploadStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'CreateUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'deletedContactId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventGroupPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventGroupId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGroup',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventGroupingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventGroupingId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupByEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupingsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedEventId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteInvitationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'deletedInvitationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitation',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitationEdge',
            type: {
              kind: 'OBJECT',
              name: 'InvitationsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedProfilePictureId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicturesEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadByUploadStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'DeleteUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'deletedUploadId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Event',
        fields: [
          {
            name: 'authorUsername',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'end',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGroupingsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventGroupingsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'invitationsByEventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'InvitationsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'inviteeCountMaximum',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isArchived',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'isInPerson',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isRemote',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'location',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'slug',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'start',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'url',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'visibility',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventDeletePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventGroup',
        fields: [
          {
            name: 'authorUsername',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGroupingsByEventGroupId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventGroupingsConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'isArchived',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'slug',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventGrouping',
        fields: [
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupByEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'EventGroupingsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventGroupingsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventGrouping',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventGroupingsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventGrouping',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventGroupsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventGroupsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventGroup',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventGroupsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'EventGroup',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUnlockPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventUnlockResponse',
            type: {
              kind: 'OBJECT',
              name: 'EventUnlockResponse',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventUnlockResponse',
        fields: [
          {
            name: 'authorUsername',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventSlug',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'jwt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Event',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Event',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventsOrganizedConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'EventsOrganizedEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'EventsOrganizedEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Invitation',
        fields: [
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'feedback',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'feedbackPaper',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uuid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'InvitationContactIdEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InvitationContactIdsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'InvitationContactIdEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InvitationsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'InvitationsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Invitation',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InvitationsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Invitation',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'InvitePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'JwtRefreshPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'jwt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'accountDelete',
            type: {
              kind: 'OBJECT',
              name: 'AccountDeletePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountEmailAddressVerification',
            type: {
              kind: 'OBJECT',
              name: 'AccountEmailAddressVerificationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordChange',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordChangePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordReset',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordResetPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountPasswordResetRequest',
            type: {
              kind: 'OBJECT',
              name: 'AccountPasswordResetRequestPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountRegistration',
            type: {
              kind: 'OBJECT',
              name: 'AccountRegistrationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountRegistrationRefresh',
            type: {
              kind: 'OBJECT',
              name: 'AccountRegistrationRefreshPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'authenticate',
            type: {
              kind: 'OBJECT',
              name: 'AuthenticatePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createContact',
            type: {
              kind: 'OBJECT',
              name: 'CreateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEvent',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventGroup',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createEventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'CreateEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createInvitation',
            type: {
              kind: 'OBJECT',
              name: 'CreateInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'CreateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createUpload',
            type: {
              kind: 'OBJECT',
              name: 'CreateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContact',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContactByAuthorAccountUsernameAndAccountUsername',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteContactById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEvent',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGroup',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGroupByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGroupById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGroupingByEventIdAndEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteEventGroupingById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteInvitation',
            type: {
              kind: 'OBJECT',
              name: 'DeleteInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteInvitationByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'DeleteInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteInvitationById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteInvitationByUuid',
            type: {
              kind: 'OBJECT',
              name: 'DeleteInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePictureById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteProfilePictureByUsername',
            type: {
              kind: 'OBJECT',
              name: 'DeleteProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUpload',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUploadById',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteUploadByUuid',
            type: {
              kind: 'OBJECT',
              name: 'DeleteUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventDelete',
            type: {
              kind: 'OBJECT',
              name: 'EventDeletePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventUnlock',
            type: {
              kind: 'OBJECT',
              name: 'EventUnlockPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invite',
            type: {
              kind: 'OBJECT',
              name: 'InvitePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'jwtRefresh',
            type: {
              kind: 'OBJECT',
              name: 'JwtRefreshPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'notificationAcknowledge',
            type: {
              kind: 'OBJECT',
              name: 'NotificationAcknowledgePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureSet',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePictureSetPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContact',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContactByAuthorAccountUsernameAndAccountUsername',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateContactById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateContactPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEvent',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGroup',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGroupByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGroupById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGroupingByEventIdAndEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateEventGroupingById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateEventGroupingPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateInvitation',
            type: {
              kind: 'OBJECT',
              name: 'UpdateInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateInvitationByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'UpdateInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateInvitationById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateInvitationByUuid',
            type: {
              kind: 'OBJECT',
              name: 'UpdateInvitationPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePicture',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePictureById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateProfilePictureByUsername',
            type: {
              kind: 'OBJECT',
              name: 'UpdateProfilePicturePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUpload',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUploadById',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUploadByUuid',
            type: {
              kind: 'OBJECT',
              name: 'UpdateUploadPayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadCreate',
            type: {
              kind: 'OBJECT',
              name: 'UploadCreatePayload',
              ofType: null,
            },
            args: [
              {
                name: 'input',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'INTERFACE',
        name: 'Node',
        fields: [
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
        possibleTypes: [
          {
            kind: 'OBJECT',
            name: 'Contact',
          },
          {
            kind: 'OBJECT',
            name: 'Event',
          },
          {
            kind: 'OBJECT',
            name: 'EventGroup',
          },
          {
            kind: 'OBJECT',
            name: 'EventGrouping',
          },
          {
            kind: 'OBJECT',
            name: 'Invitation',
          },
          {
            kind: 'OBJECT',
            name: 'ProfilePicture',
          },
          {
            kind: 'OBJECT',
            name: 'Query',
          },
          {
            kind: 'OBJECT',
            name: 'Upload',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'NotificationAcknowledgePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'PageInfo',
        fields: [
          {
            name: 'endCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'hasNextPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'hasPreviousPage',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'startCursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePicture',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uploadByUploadStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadStorageKey',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'username',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePictureSetPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePicturesConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ProfilePicturesEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'ProfilePicture',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'ProfilePicturesEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ProfilePicture',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'accountIsExisting',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'username',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'accountUploadQuotaBytes',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'allContacts',
            type: {
              kind: 'OBJECT',
              name: 'ContactsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventGroupings',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupingsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEventGroups',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allEvents',
            type: {
              kind: 'OBJECT',
              name: 'EventsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allInvitations',
            type: {
              kind: 'OBJECT',
              name: 'InvitationsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allProfilePictures',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicturesConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'allUploads',
            type: {
              kind: 'OBJECT',
              name: 'UploadsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'contactByAuthorAccountUsernameAndAccountUsername',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'accountUsername',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'authorAccountUsername',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'contactById',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'authorUsername',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'slug',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventById',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGroup',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGroupByAuthorUsernameAndSlug',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [
              {
                name: 'authorUsername',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'slug',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGroupById',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGroupingByEventIdAndEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [
              {
                name: 'eventGroupId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventGroupingById',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventInviteeCountMaximum',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventIsExisting',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'authorUsername',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'slug',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'eventsOrganized',
            type: {
              kind: 'OBJECT',
              name: 'EventsOrganizedConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'invitation',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invitationByEventIdAndContactId',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [
              {
                name: 'contactId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invitationById',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invitationByUuid',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [
              {
                name: 'uuid',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'invitationClaimArray',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'invitationContactIds',
            type: {
              kind: 'OBJECT',
              name: 'InvitationContactIdsConnection',
              ofType: null,
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'inviteeCount',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [
              {
                name: 'eventId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'node',
            type: {
              kind: 'INTERFACE',
              name: 'Node',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureById',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'profilePictureByUsername',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [
              {
                name: 'username',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Query',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'nodeId',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadById',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadByStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'storageKey',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'uploadByUuid',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [
              {
                name: 'uuid',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateContactPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'contactEdge',
            type: {
              kind: 'OBJECT',
              name: 'ContactsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateEventGroupPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventGroup',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateEventGroupingPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupByEventGroupId',
            type: {
              kind: 'OBJECT',
              name: 'EventGroup',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGrouping',
            type: {
              kind: 'OBJECT',
              name: 'EventGrouping',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventGroupingEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventGroupingsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateEventPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'event',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventEdge',
            type: {
              kind: 'OBJECT',
              name: 'EventsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateInvitationPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contactByContactId',
            type: {
              kind: 'OBJECT',
              name: 'Contact',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'eventByEventId',
            type: {
              kind: 'OBJECT',
              name: 'Event',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitation',
            type: {
              kind: 'OBJECT',
              name: 'Invitation',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'invitationEdge',
            type: {
              kind: 'OBJECT',
              name: 'InvitationsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateProfilePicturePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'profilePicture',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicture',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'profilePictureEdge',
            type: {
              kind: 'OBJECT',
              name: 'ProfilePicturesEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadByUploadStorageKey',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UpdateUploadPayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'upload',
            type: {
              kind: 'OBJECT',
              name: 'Upload',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uploadEdge',
            type: {
              kind: 'OBJECT',
              name: 'UploadsEdge',
              ofType: null,
            },
            args: [
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Upload',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'nodeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'profilePicturesByUploadStorageKey',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'ProfilePicturesConnection',
                ofType: null,
              },
            },
            args: [
              {
                name: 'after',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'before',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'condition',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'first',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'last',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'sizeByte',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'storageKey',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'username',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'uuid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [
          {
            kind: 'INTERFACE',
            name: 'Node',
          },
        ],
      },
      {
        kind: 'OBJECT',
        name: 'UploadCreatePayload',
        fields: [
          {
            name: 'clientMutationId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'query',
            type: {
              kind: 'OBJECT',
              name: 'Query',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'uuid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UploadsConnection',
        fields: [
          {
            name: 'edges',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'UploadsEdge',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Upload',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'pageInfo',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'PageInfo',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'totalCount',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UploadsEdge',
        fields: [
          {
            name: 'cursor',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'node',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Upload',
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery
