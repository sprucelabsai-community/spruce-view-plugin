import { buildEventContract } from '@sprucelabs/mercury-types'
const eventContracts = [
    buildEventContract({
        eventSignatures: {
            'did-message::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'didMessageEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'messageTarget',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: '',
                                    fields: {
                                        locationId: {
                                            type: 'id',
                                        },
                                        personId: {
                                            type: 'id',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        skillId: {
                                            type: 'id',
                                        },
                                        roleId: {
                                            type: 'id',
                                        },
                                        phone: {
                                            type: 'phone',
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'didMessageEmitPayload',
                                    fields: {
                                        message: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'message',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: '',
                                                    description:
                                                        'A discrete communication between two humans or a human and a machine.',
                                                    fields: {
                                                        id: {
                                                            type: 'id',
                                                            isRequired: true,
                                                        },
                                                        dateCreated: {
                                                            type: 'number',
                                                            isRequired: true,
                                                        },
                                                        dateSent: {
                                                            type: 'number',
                                                        },
                                                        target: {
                                                            type: 'schema',
                                                            isRequired: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'messageTarget',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: '',
                                                                    fields: {
                                                                        locationId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        personId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        organizationId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        skillId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        roleId: {
                                                                            type: 'id',
                                                                        },
                                                                        phone: {
                                                                            type: 'phone',
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        source: {
                                                            type: 'schema',
                                                            isRequired: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'messageSource',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: '',
                                                                    fields: {
                                                                        locationId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        personId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        organizationId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        skillId:
                                                                            {
                                                                                type: 'id',
                                                                            },
                                                                        roleId: {
                                                                            type: 'id',
                                                                        },
                                                                        isCore: {
                                                                            type: 'boolean',
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        errors: {
                                                            type: 'text',
                                                            isPrivate: true,
                                                            isArray: true,
                                                        },
                                                        classification: {
                                                            type: 'select',
                                                            isRequired: true,
                                                            options: {
                                                                choices: [
                                                                    {
                                                                        value: 'auth',
                                                                        label: 'Auth',
                                                                    },
                                                                    {
                                                                        value: 'transactional',
                                                                        label: 'transactional',
                                                                    },
                                                                    {
                                                                        value: 'promotional',
                                                                        label: 'Promotional',
                                                                    },
                                                                    {
                                                                        value: 'incoming',
                                                                        label: 'incoming',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        status: {
                                                            type: 'select',
                                                            isPrivate: true,
                                                            defaultValue:
                                                                'pending',
                                                            options: {
                                                                choices: [
                                                                    {
                                                                        value: 'pending',
                                                                        label: 'Pending',
                                                                    },
                                                                    {
                                                                        value: 'processing',
                                                                        label: 'Processing',
                                                                    },
                                                                    {
                                                                        value: 'sent',
                                                                        label: 'Sent',
                                                                    },
                                                                    {
                                                                        value: 'failed',
                                                                        label: 'Failed',
                                                                    },
                                                                    {
                                                                        value: 'ignored',
                                                                        label: 'Ignored',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        body: {
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        context: {
                                                            type: 'raw',
                                                            isPrivate: true,
                                                            options: {
                                                                valueType:
                                                                    'Record<string, any>',
                                                            },
                                                        },
                                                        topicId: {
                                                            type: 'id',
                                                        },
                                                        choices: {
                                                            type: 'schema',
                                                            isArray: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'fullMessageChoices',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: '',
                                                                    fields: {
                                                                        value: {
                                                                            type: 'text',
                                                                            isRequired:
                                                                                true,
                                                                        },
                                                                        label: {
                                                                            type: 'text',
                                                                            isRequired:
                                                                                true,
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        conversationState: {
                                            type: 'text',
                                        },
                                        topic: {
                                            type: 'text',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'didMessageResponsePayload',
                    fields: {
                        transitionConversationTo: {
                            type: 'select',
                            options: {
                                choices: [
                                    {
                                        label: 'Greeting',
                                        value: 'greeting',
                                    },
                                    {
                                        label: 'Discovery',
                                        value: 'discovery',
                                    },
                                    {
                                        label: 'Topic',
                                        value: 'topic',
                                    },
                                    {
                                        label: 'Closing',
                                        value: 'closing',
                                    },
                                ],
                            },
                        },
                        repairs: {
                            type: 'text',
                            isArray: true,
                        },
                        topicChangers: {
                            type: 'text',
                            isArray: true,
                        },
                        utterance: {
                            type: 'text',
                        },
                        suggestedTopics: {
                            type: 'schema',
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'conversationTopic',
                                    fields: {
                                        key: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        confidence: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        label: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                emitPermissionContract: {
                    id: 'emit-messaging',
                    name: 'Emit messaging events',
                    description:
                        'Various permissions related to emitting messaging events.',
                    requireAllPermissions: false,
                    permissions: [
                        {
                            id: 'can-emit-did-message-event',
                            name: 'Emit did-message event',
                        },
                    ],
                },
                listenPermissionContract: {
                    id: 'listen-messaging',
                    name: 'Listen to messaging events',
                    description:
                        'Various permissions related to listening for messages.',
                    requireAllPermissions: false,
                    permissions: [
                        {
                            id: 'can-listen-to-did-message-event',
                            name: 'Listen to did-message event',
                        },
                    ],
                },
            },
            'authenticate::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'authenticateEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'authenticateEmitPayload',
                                    fields: {
                                        token: {
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        skillId: {
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        apiKey: {
                                            type: 'text',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'authenticateResponsePayload',
                    fields: {
                        type: {
                            type: 'select',
                            isRequired: true,
                            options: {
                                choices: [
                                    {
                                        value: 'authenticated',
                                        label: 'Authenticated',
                                    },
                                    {
                                        value: 'anonymous',
                                        label: 'Anonymous',
                                    },
                                ],
                            },
                        },
                        auth: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'authSchema',
                                    fields: {
                                        person: {
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'person',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Person',
                                                    description:
                                                        'A human being.',
                                                    fields: {
                                                        id: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isRequired: true,
                                                        },
                                                        firstName: {
                                                            label: 'First name',
                                                            type: 'text',
                                                            isPrivate: true,
                                                        },
                                                        lastName: {
                                                            label: 'Last name',
                                                            type: 'text',
                                                            isPrivate: true,
                                                        },
                                                        casualName: {
                                                            label: 'Casual name',
                                                            type: 'text',
                                                            isRequired: true,
                                                            hint: 'The name you can use when talking to this person.',
                                                        },
                                                        phone: {
                                                            label: 'Phone',
                                                            type: 'phone',
                                                            isPrivate: true,
                                                            hint: 'A number that can be texted',
                                                        },
                                                        profileImages: {
                                                            label: 'Profile photos',
                                                            type: 'schema',
                                                            options: {
                                                                schema: {
                                                                    id: 'profileImage',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: 'Profile Image Sizes',
                                                                    description:
                                                                        'Various sizes that a profile image comes in.',
                                                                    fields: {
                                                                        profile60:
                                                                            {
                                                                                label: '60x60',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        profile150:
                                                                            {
                                                                                label: '150x150',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        'profile60@2x':
                                                                            {
                                                                                label: '60x60',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        'profile150@2x':
                                                                            {
                                                                                label: '150x150',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        dateCreated: {
                                                            type: 'number',
                                                            isRequired: true,
                                                        },
                                                        dateScrambled: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        skill: {
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'skill',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Skill',
                                                    description:
                                                        'An ability Sprucebot has learned.',
                                                    fields: {
                                                        id: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isRequired: true,
                                                        },
                                                        apiKey: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isPrivate: true,
                                                            isRequired: true,
                                                        },
                                                        name: {
                                                            label: 'Name',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        description: {
                                                            label: 'Description',
                                                            type: 'text',
                                                        },
                                                        slug: {
                                                            label: 'Slug',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        creators: {
                                                            label: 'Creators',
                                                            type: 'schema',
                                                            isPrivate: true,
                                                            isRequired: true,
                                                            hint: 'The people or skills who created and own this skill.',
                                                            isArray: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'skillCreator',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: 'Skill creator',
                                                                    fields: {
                                                                        skillId:
                                                                            {
                                                                                type: 'text',
                                                                            },
                                                                        personId:
                                                                            {
                                                                                type: 'text',
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        dateCreated: {
                                                            type: 'number',
                                                            isRequired: true,
                                                        },
                                                        dateDeleted: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'can-listen::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'canListenEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'canListenEmitPayload',
                                    fields: {
                                        authorizerStatuses: {
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Clocked in',
                                                        value: 'clockedIn',
                                                    },
                                                    {
                                                        label: 'Clocked out',
                                                        value: 'clockedOut',
                                                    },
                                                    {
                                                        label: 'On premise',
                                                        value: 'onPrem',
                                                    },
                                                    {
                                                        label: 'Off premise',
                                                        value: 'offPrem',
                                                    },
                                                ],
                                            },
                                        },
                                        fullyQualifiedEventName: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'canListenResponsePayload',
                    fields: {
                        can: {
                            type: 'boolean',
                        },
                    },
                },
            },
            'confirm-pin::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'confirmPinEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'confirmPinEmitPayload',
                                    fields: {
                                        challenge: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        pin: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'confirmPinRespondPayload',
                    fields: {
                        person: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'person',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Person',
                                    description: 'A human being.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        firstName: {
                                            label: 'First name',
                                            type: 'text',
                                            isPrivate: true,
                                        },
                                        lastName: {
                                            label: 'Last name',
                                            type: 'text',
                                            isPrivate: true,
                                        },
                                        casualName: {
                                            label: 'Casual name',
                                            type: 'text',
                                            isRequired: true,
                                            hint: 'The name you can use when talking to this person.',
                                        },
                                        phone: {
                                            label: 'Phone',
                                            type: 'phone',
                                            isPrivate: true,
                                            hint: 'A number that can be texted',
                                        },
                                        profileImages: {
                                            label: 'Profile photos',
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'profileImage',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Profile Image Sizes',
                                                    description:
                                                        'Various sizes that a profile image comes in.',
                                                    fields: {
                                                        profile60: {
                                                            label: '60x60',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        profile150: {
                                                            label: '150x150',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        'profile60@2x': {
                                                            label: '60x60',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        'profile150@2x': {
                                                            label: '150x150',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateScrambled: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                        token: {
                            type: 'text',
                            isRequired: true,
                        },
                    },
                },
            },
            'create-location::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'createLocationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'createLocationTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'createLocationEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        slug: {
                                            type: 'text',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'createLocationResponsePayload',
                    fields: {
                        location: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'location',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Location',
                                    description:
                                        'A physical location where people meet. An organization has at least one of them.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'create-organization::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'createOrganizationEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'createOrgEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        slug: {
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'createOrgResponsePayload',
                    fields: {
                        organization: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'organization',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Organization',
                                    description:
                                        'A company or team. Comprises of many people and locations.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'create-role::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'createRoleEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'createRoleTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'createRoleEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'createRoleResponsePayload',
                    fields: {
                        role: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'role',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Role',
                                    description:
                                        'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'delete-location::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'deleteLocationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'deleteLocationTargetPayload',
                                    fields: {
                                        locationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'deleteLocationResponsePayload',
                    fields: {
                        location: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'location',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Location',
                                    description:
                                        'A physical location where people meet. An organization has at least one of them.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'delete-organization::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'deleteOrganizationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'deleteOrganizationTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'deleteOrgResponsePayload',
                    fields: {
                        organization: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'organization',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Organization',
                                    description:
                                        'A company or team. Comprises of many people and locations.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'delete-role::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'deleteRoleEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'deleteRoleTargetPayload',
                                    fields: {
                                        roleId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'deleteRoleResponsePayload',
                    fields: {
                        role: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'role',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Role',
                                    description:
                                        'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'does-honor-permission-contract::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'doesHonorPermissionContractEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'doesHonorPermissionContractEmitTarget',
                                    fields: {
                                        personId: {
                                            type: 'id',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        locationId: {
                                            type: 'id',
                                        },
                                        skillId: {
                                            type: 'id',
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'doesHonorPermissionContractEmitPayload',
                                    fields: {
                                        id: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'doesHonorPermissionContractRespondPayload',
                    fields: {
                        doesHonor: {
                            type: 'boolean',
                            isRequired: true,
                        },
                    },
                },
            },
            'get-conversation-topics::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'getConversationTopicsResponsePayload',
                    fields: {
                        topics: {
                            type: 'schema',
                            isRequired: true,
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'getConversationTopicsTopic',
                                    fields: {
                                        key: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'get-event-contracts::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'getEventContractsResponsePayload',
                    importsWhenRemote: ["import '@sprucelabs/mercury-types'"],
                    fields: {
                        contracts: {
                            type: 'schema',
                            isArray: true,
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'eventContract',
                                    version: 'v2020_09_01',
                                    namespace: 'Mercury',
                                    name: 'Event contract',
                                    description: 'A Mercury Event Contract.',
                                    fields: {
                                        id: {
                                            type: 'id',
                                        },
                                        eventSignatures: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'eventSignaturesByName',
                                                    version: 'v2020_09_01',
                                                    namespace: 'Mercury',
                                                    name: '',
                                                    dynamicFieldSignature: {
                                                        type: 'schema',
                                                        keyName: 'eventName',
                                                        isRequired: true,
                                                        options: {
                                                            schema: {
                                                                id: 'eventSignature',
                                                                version:
                                                                    'v2020_09_01',
                                                                namespace:
                                                                    'Mercury',
                                                                name: 'Event Signature',
                                                                fields: {
                                                                    isGlobal: {
                                                                        type: 'boolean',
                                                                        defaultValue:
                                                                            false,
                                                                    },
                                                                    responsePayloadSchema:
                                                                        {
                                                                            type: 'raw',
                                                                            options:
                                                                                {
                                                                                    valueType:
                                                                                        'SpruceSchema.Schema',
                                                                                },
                                                                        },
                                                                    emitPayloadSchema:
                                                                        {
                                                                            type: 'raw',
                                                                            options:
                                                                                {
                                                                                    valueType:
                                                                                        'SpruceSchema.Schema',
                                                                                },
                                                                        },
                                                                    listenPermissionContract:
                                                                        {
                                                                            type: 'schema',
                                                                            options:
                                                                                {
                                                                                    schema: {
                                                                                        id: 'permissionContract',
                                                                                        version:
                                                                                            'v2020_09_01',
                                                                                        namespace:
                                                                                            'Mercury',
                                                                                        name: 'Permission contract',
                                                                                        description:
                                                                                            'A Mercury Permission Contract',
                                                                                        fields: {
                                                                                            id: {
                                                                                                type: 'text',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                            name: {
                                                                                                label: 'Name',
                                                                                                type: 'text',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                hint: 'Human readable name for this contract',
                                                                                            },
                                                                                            description:
                                                                                                {
                                                                                                    label: 'Description',
                                                                                                    type: 'text',
                                                                                                },
                                                                                            requireAllPermissions:
                                                                                                {
                                                                                                    label: 'Require all permissions',
                                                                                                    type: 'boolean',
                                                                                                    defaultValue:
                                                                                                        false,
                                                                                                },
                                                                                            permissions:
                                                                                                {
                                                                                                    type: 'schema',
                                                                                                    isRequired:
                                                                                                        true,
                                                                                                    isArray:
                                                                                                        true,
                                                                                                    minArrayLength: 0,
                                                                                                    options:
                                                                                                        {
                                                                                                            schema: {
                                                                                                                id: 'permission',
                                                                                                                version:
                                                                                                                    'v2020_09_01',
                                                                                                                namespace:
                                                                                                                    'Mercury',
                                                                                                                name: 'Permission',
                                                                                                                fields: {
                                                                                                                    id: {
                                                                                                                        label: 'id',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        label: 'Name',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Human readable name for this permission',
                                                                                                                    },
                                                                                                                    description:
                                                                                                                        {
                                                                                                                            label: 'Description',
                                                                                                                            type: 'text',
                                                                                                                        },
                                                                                                                    requireAllStatuses:
                                                                                                                        {
                                                                                                                            label: 'Require all statuses',
                                                                                                                            type: 'boolean',
                                                                                                                            defaultValue:
                                                                                                                                false,
                                                                                                                        },
                                                                                                                    defaults:
                                                                                                                        {
                                                                                                                            type: 'schema',
                                                                                                                            options:
                                                                                                                                {
                                                                                                                                    schema: {
                                                                                                                                        id: 'permissionDefaults',
                                                                                                                                        version:
                                                                                                                                            'v2020_09_01',
                                                                                                                                        namespace:
                                                                                                                                            'Mercury',
                                                                                                                                        name: '',
                                                                                                                                        fields: {
                                                                                                                                            skill: {
                                                                                                                                                type: 'boolean',
                                                                                                                                            },
                                                                                                                                            owner: {
                                                                                                                                                label: 'Owner',
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                            groupManager:
                                                                                                                                                {
                                                                                                                                                    label: 'Group manager',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            manager:
                                                                                                                                                {
                                                                                                                                                    label: 'Manager',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            teammate:
                                                                                                                                                {
                                                                                                                                                    label: 'Teammate',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            guest: {
                                                                                                                                                label: 'Guest',
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                            anonymous:
                                                                                                                                                {
                                                                                                                                                    label: 'Anonymous',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                        },
                                                                                                                    can: {
                                                                                                                        type: 'schema',
                                                                                                                        options:
                                                                                                                            {
                                                                                                                                schema: {
                                                                                                                                    id: 'statusFlags',
                                                                                                                                    version:
                                                                                                                                        'v2020_09_01',
                                                                                                                                    namespace:
                                                                                                                                        'Mercury',
                                                                                                                                    name: '',
                                                                                                                                    fields: {
                                                                                                                                        default:
                                                                                                                                            {
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                            },
                                                                                                                                        clockedIn:
                                                                                                                                            {
                                                                                                                                                label: 'Clocked in',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                            },
                                                                                                                                        clockedOut:
                                                                                                                                            {
                                                                                                                                                label: 'Clocked out',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                            },
                                                                                                                                        onPrem: {
                                                                                                                                            label: 'On premise',
                                                                                                                                            type: 'boolean',
                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                        },
                                                                                                                                        offPrem:
                                                                                                                                            {
                                                                                                                                                label: 'Off premise',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                            },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                            },
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                },
                                                                                        },
                                                                                    },
                                                                                },
                                                                        },
                                                                    emitPermissionContract:
                                                                        {
                                                                            type: 'schema',
                                                                            options:
                                                                                {
                                                                                    schema: {
                                                                                        id: 'permissionContract',
                                                                                        version:
                                                                                            'v2020_09_01',
                                                                                        namespace:
                                                                                            'Mercury',
                                                                                        name: 'Permission contract',
                                                                                        description:
                                                                                            'A Mercury Permission Contract',
                                                                                        fields: {
                                                                                            id: {
                                                                                                type: 'text',
                                                                                                isRequired:
                                                                                                    true,
                                                                                            },
                                                                                            name: {
                                                                                                label: 'Name',
                                                                                                type: 'text',
                                                                                                isRequired:
                                                                                                    true,
                                                                                                hint: 'Human readable name for this contract',
                                                                                            },
                                                                                            description:
                                                                                                {
                                                                                                    label: 'Description',
                                                                                                    type: 'text',
                                                                                                },
                                                                                            requireAllPermissions:
                                                                                                {
                                                                                                    label: 'Require all permissions',
                                                                                                    type: 'boolean',
                                                                                                    defaultValue:
                                                                                                        false,
                                                                                                },
                                                                                            permissions:
                                                                                                {
                                                                                                    type: 'schema',
                                                                                                    isRequired:
                                                                                                        true,
                                                                                                    isArray:
                                                                                                        true,
                                                                                                    minArrayLength: 0,
                                                                                                    options:
                                                                                                        {
                                                                                                            schema: {
                                                                                                                id: 'permission',
                                                                                                                version:
                                                                                                                    'v2020_09_01',
                                                                                                                namespace:
                                                                                                                    'Mercury',
                                                                                                                name: 'Permission',
                                                                                                                fields: {
                                                                                                                    id: {
                                                                                                                        label: 'id',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        label: 'Name',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Human readable name for this permission',
                                                                                                                    },
                                                                                                                    description:
                                                                                                                        {
                                                                                                                            label: 'Description',
                                                                                                                            type: 'text',
                                                                                                                        },
                                                                                                                    requireAllStatuses:
                                                                                                                        {
                                                                                                                            label: 'Require all statuses',
                                                                                                                            type: 'boolean',
                                                                                                                            defaultValue:
                                                                                                                                false,
                                                                                                                        },
                                                                                                                    defaults:
                                                                                                                        {
                                                                                                                            type: 'schema',
                                                                                                                            options:
                                                                                                                                {
                                                                                                                                    schema: {
                                                                                                                                        id: 'permissionDefaults',
                                                                                                                                        version:
                                                                                                                                            'v2020_09_01',
                                                                                                                                        namespace:
                                                                                                                                            'Mercury',
                                                                                                                                        name: '',
                                                                                                                                        fields: {
                                                                                                                                            skill: {
                                                                                                                                                type: 'boolean',
                                                                                                                                            },
                                                                                                                                            owner: {
                                                                                                                                                label: 'Owner',
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                            groupManager:
                                                                                                                                                {
                                                                                                                                                    label: 'Group manager',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            manager:
                                                                                                                                                {
                                                                                                                                                    label: 'Manager',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            teammate:
                                                                                                                                                {
                                                                                                                                                    label: 'Teammate',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            guest: {
                                                                                                                                                label: 'Guest',
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                            anonymous:
                                                                                                                                                {
                                                                                                                                                    label: 'Anonymous',
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'statusFlags',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    default:
                                                                                                                                                                        {
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'What is the fallback if no status is set?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedIn:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked in',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                        },
                                                                                                                                                                    clockedOut:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Clocked out',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: 'When someone is not working (off the clock).',
                                                                                                                                                                        },
                                                                                                                                                                    onPrem: {
                                                                                                                                                                        label: 'On premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                    },
                                                                                                                                                                    offPrem:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Off premise',
                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                            hint: "They aren't at the office or shop.",
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                        },
                                                                                                                    can: {
                                                                                                                        type: 'schema',
                                                                                                                        options:
                                                                                                                            {
                                                                                                                                schema: {
                                                                                                                                    id: 'statusFlags',
                                                                                                                                    version:
                                                                                                                                        'v2020_09_01',
                                                                                                                                    namespace:
                                                                                                                                        'Mercury',
                                                                                                                                    name: '',
                                                                                                                                    fields: {
                                                                                                                                        default:
                                                                                                                                            {
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                            },
                                                                                                                                        clockedIn:
                                                                                                                                            {
                                                                                                                                                label: 'Clocked in',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                            },
                                                                                                                                        clockedOut:
                                                                                                                                            {
                                                                                                                                                label: 'Clocked out',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                            },
                                                                                                                                        onPrem: {
                                                                                                                                            label: 'On premise',
                                                                                                                                            type: 'boolean',
                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                        },
                                                                                                                                        offPrem:
                                                                                                                                            {
                                                                                                                                                label: 'Off premise',
                                                                                                                                                type: 'boolean',
                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                            },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                            },
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                },
                                                                                        },
                                                                                    },
                                                                                },
                                                                        },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'get-location::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'getLocationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'getLocationTargetPayload',
                                    fields: {
                                        locationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'getLocationResponsePayload',
                    fields: {
                        location: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'location',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Location',
                                    description:
                                        'A physical location where people meet. An organization has at least one of them.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'get-organization::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'getOrganizationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'getOrganizationTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'getOrgResponsePayload',
                    fields: {
                        organization: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'organization',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Organization',
                                    description:
                                        'A company or team. Comprises of many people and locations.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'get-role::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'getRoleEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'getRoleEmitTarget',
                                    fields: {
                                        roleId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'getRoleResponsePayload',
                    fields: {
                        role: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'role',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Role',
                                    description:
                                        'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'get-skill::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'getSkillEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'getSkillTargetPayload',
                                    fields: {
                                        skillId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'getSkillEmitPayload',
                                    fields: {
                                        shouldIncludeApiKey: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'getSkillResponsePayload',
                    fields: {
                        skill: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'skill',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Skill',
                                    description:
                                        'An ability Sprucebot has learned.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        apiKey: {
                                            label: 'Id',
                                            type: 'id',
                                            isPrivate: true,
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        creators: {
                                            label: 'Creators',
                                            type: 'schema',
                                            isPrivate: true,
                                            isRequired: true,
                                            hint: 'The people or skills who created and own this skill.',
                                            isArray: true,
                                            options: {
                                                schema: {
                                                    id: 'skillCreator',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Skill creator',
                                                    fields: {
                                                        skillId: {
                                                            type: 'text',
                                                        },
                                                        personId: {
                                                            type: 'text',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'health::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'healthResponsePayload',
                    fields: {
                        skill: {
                            type: 'schema',
                            options: {
                                schema: {
                                    id: 'healthCheckItem',
                                    fields: {
                                        status: {
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'passed',
                                                        label: 'Passed',
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        mercury: {
                            type: 'schema',
                            options: {
                                schema: {
                                    id: 'healthCheckItem',
                                    fields: {
                                        status: {
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'passed',
                                                        label: 'Passed',
                                                    },
                                                ],
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'install-skill::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'installSkillEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'installSkillEmitTarget',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'installSkillEmitPayload',
                                    fields: {
                                        skillId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'installSkillResponsePayload',
                    fields: {},
                },
            },
            'is-skill-installed::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'isSkillInstalledEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'isSkillInstalledTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'isSkillInstalledEmitPayload',
                                    fields: {
                                        skillId: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'isSkillInstalledResponsePayload',
                    fields: {
                        isInstalled: {
                            type: 'boolean',
                        },
                    },
                },
            },
            'list-locations::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'listLocationsEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'listLocationsTargetPayload',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'listLocationsEmitPayload',
                                    fields: {
                                        includePrivateLocations: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'listLocationsResponsePayload',
                    fields: {
                        locations: {
                            type: 'schema',
                            isRequired: true,
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'location',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Location',
                                    description:
                                        'A physical location where people meet. An organization has at least one of them.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'list-organizations::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'listOrganizationsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'listOrgsEmitPayload',
                                    fields: {
                                        shouldOnlyShowMine: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'listOrgsResponsePayload',
                    fields: {
                        organizations: {
                            type: 'schema',
                            isRequired: true,
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'organization',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Organization',
                                    description:
                                        'A company or team. Comprises of many people and locations.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'list-roles::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'listRolesEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'listRolesEmitTarget',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        personId: {
                                            type: 'id',
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'listRolesEmitPayload',
                                    fields: {
                                        shouldIncludePrivateRoles: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'listRolesResponsePayload',
                    fields: {
                        roles: {
                            type: 'schema',
                            isRequired: true,
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'role',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Role',
                                    description:
                                        'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'list-skills::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'listSkillsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'listSkillsEmitPayload',
                                    fields: {
                                        shouldOnlyShowMine: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'listSkillsResponsePayload',
                    fields: {
                        skills: {
                            type: 'schema',
                            isRequired: true,
                            isArray: true,
                            options: {
                                schema: {
                                    id: 'listSkillsSkillsResponsePayload',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'logout::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'logoutResponsePayload',
                    fields: {},
                },
            },
            'register-conversation-topics::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'registerConversationTopicsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'registerConversationTopicsEmitPayload',
                                    fields: {
                                        topics: {
                                            type: 'schema',
                                            isArray: true,
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'registerConversationTopicEmitPayloadTopic',
                                                    fields: {
                                                        key: {
                                                            type: 'text',
                                                            isRequired: true,
                                                            label: 'Key',
                                                            hint: 'A way to identify this topic, must be unique for your skill.',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'registerConversationTopicsResponsePayload',
                    fields: {},
                },
            },
            'register-events::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'registerEventsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'registerEventsEmitPayload',
                                    importsWhenRemote: [
                                        "import '@sprucelabs/mercury-types'",
                                    ],
                                    fields: {
                                        contract: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'eventContract',
                                                    version: 'v2020_09_01',
                                                    namespace: 'Mercury',
                                                    name: 'Event contract',
                                                    description:
                                                        'A Mercury Event Contract.',
                                                    fields: {
                                                        id: {
                                                            type: 'id',
                                                        },
                                                        eventSignatures: {
                                                            type: 'schema',
                                                            isRequired: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'eventSignaturesByName',
                                                                    version:
                                                                        'v2020_09_01',
                                                                    namespace:
                                                                        'Mercury',
                                                                    name: '',
                                                                    dynamicFieldSignature:
                                                                        {
                                                                            type: 'schema',
                                                                            keyName:
                                                                                'eventName',
                                                                            isRequired:
                                                                                true,
                                                                            options:
                                                                                {
                                                                                    schema: {
                                                                                        id: 'eventSignature',
                                                                                        version:
                                                                                            'v2020_09_01',
                                                                                        namespace:
                                                                                            'Mercury',
                                                                                        name: 'Event Signature',
                                                                                        fields: {
                                                                                            isGlobal:
                                                                                                {
                                                                                                    type: 'boolean',
                                                                                                    defaultValue:
                                                                                                        false,
                                                                                                },
                                                                                            responsePayloadSchema:
                                                                                                {
                                                                                                    type: 'raw',
                                                                                                    options:
                                                                                                        {
                                                                                                            valueType:
                                                                                                                'SpruceSchema.Schema',
                                                                                                        },
                                                                                                },
                                                                                            emitPayloadSchema:
                                                                                                {
                                                                                                    type: 'raw',
                                                                                                    options:
                                                                                                        {
                                                                                                            valueType:
                                                                                                                'SpruceSchema.Schema',
                                                                                                        },
                                                                                                },
                                                                                            listenPermissionContract:
                                                                                                {
                                                                                                    type: 'schema',
                                                                                                    options:
                                                                                                        {
                                                                                                            schema: {
                                                                                                                id: 'permissionContract',
                                                                                                                version:
                                                                                                                    'v2020_09_01',
                                                                                                                namespace:
                                                                                                                    'Mercury',
                                                                                                                name: 'Permission contract',
                                                                                                                description:
                                                                                                                    'A Mercury Permission Contract',
                                                                                                                fields: {
                                                                                                                    id: {
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        label: 'Name',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Human readable name for this contract',
                                                                                                                    },
                                                                                                                    description:
                                                                                                                        {
                                                                                                                            label: 'Description',
                                                                                                                            type: 'text',
                                                                                                                        },
                                                                                                                    requireAllPermissions:
                                                                                                                        {
                                                                                                                            label: 'Require all permissions',
                                                                                                                            type: 'boolean',
                                                                                                                            defaultValue:
                                                                                                                                false,
                                                                                                                        },
                                                                                                                    permissions:
                                                                                                                        {
                                                                                                                            type: 'schema',
                                                                                                                            isRequired:
                                                                                                                                true,
                                                                                                                            isArray:
                                                                                                                                true,
                                                                                                                            minArrayLength: 0,
                                                                                                                            options:
                                                                                                                                {
                                                                                                                                    schema: {
                                                                                                                                        id: 'permission',
                                                                                                                                        version:
                                                                                                                                            'v2020_09_01',
                                                                                                                                        namespace:
                                                                                                                                            'Mercury',
                                                                                                                                        name: 'Permission',
                                                                                                                                        fields: {
                                                                                                                                            id: {
                                                                                                                                                label: 'id',
                                                                                                                                                type: 'text',
                                                                                                                                                isRequired:
                                                                                                                                                    true,
                                                                                                                                                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
                                                                                                                                            },
                                                                                                                                            name: {
                                                                                                                                                label: 'Name',
                                                                                                                                                type: 'text',
                                                                                                                                                isRequired:
                                                                                                                                                    true,
                                                                                                                                                hint: 'Human readable name for this permission',
                                                                                                                                            },
                                                                                                                                            description:
                                                                                                                                                {
                                                                                                                                                    label: 'Description',
                                                                                                                                                    type: 'text',
                                                                                                                                                },
                                                                                                                                            requireAllStatuses:
                                                                                                                                                {
                                                                                                                                                    label: 'Require all statuses',
                                                                                                                                                    type: 'boolean',
                                                                                                                                                    defaultValue:
                                                                                                                                                        false,
                                                                                                                                                },
                                                                                                                                            defaults:
                                                                                                                                                {
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'permissionDefaults',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    skill: {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                    },
                                                                                                                                                                    owner: {
                                                                                                                                                                        label: 'Owner',
                                                                                                                                                                        type: 'schema',
                                                                                                                                                                        options:
                                                                                                                                                                            {
                                                                                                                                                                                schema: {
                                                                                                                                                                                    id: 'statusFlags',
                                                                                                                                                                                    version:
                                                                                                                                                                                        'v2020_09_01',
                                                                                                                                                                                    namespace:
                                                                                                                                                                                        'Mercury',
                                                                                                                                                                                    name: '',
                                                                                                                                                                                    fields: {
                                                                                                                                                                                        default:
                                                                                                                                                                                            {
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedIn:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked in',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedOut:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked out',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                            },
                                                                                                                                                                                        onPrem: {
                                                                                                                                                                                            label: 'On premise',
                                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                        },
                                                                                                                                                                                        offPrem:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Off premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                                                                            },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                    },
                                                                                                                                                                    groupManager:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Group manager',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    manager:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Manager',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    teammate:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Teammate',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    guest: {
                                                                                                                                                                        label: 'Guest',
                                                                                                                                                                        type: 'schema',
                                                                                                                                                                        options:
                                                                                                                                                                            {
                                                                                                                                                                                schema: {
                                                                                                                                                                                    id: 'statusFlags',
                                                                                                                                                                                    version:
                                                                                                                                                                                        'v2020_09_01',
                                                                                                                                                                                    namespace:
                                                                                                                                                                                        'Mercury',
                                                                                                                                                                                    name: '',
                                                                                                                                                                                    fields: {
                                                                                                                                                                                        default:
                                                                                                                                                                                            {
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedIn:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked in',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedOut:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked out',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                            },
                                                                                                                                                                                        onPrem: {
                                                                                                                                                                                            label: 'On premise',
                                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                        },
                                                                                                                                                                                        offPrem:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Off premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                                                                            },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                    },
                                                                                                                                                                    anonymous:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Anonymous',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            can: {
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                        },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                },
                                                                                            emitPermissionContract:
                                                                                                {
                                                                                                    type: 'schema',
                                                                                                    options:
                                                                                                        {
                                                                                                            schema: {
                                                                                                                id: 'permissionContract',
                                                                                                                version:
                                                                                                                    'v2020_09_01',
                                                                                                                namespace:
                                                                                                                    'Mercury',
                                                                                                                name: 'Permission contract',
                                                                                                                description:
                                                                                                                    'A Mercury Permission Contract',
                                                                                                                fields: {
                                                                                                                    id: {
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                    },
                                                                                                                    name: {
                                                                                                                        label: 'Name',
                                                                                                                        type: 'text',
                                                                                                                        isRequired:
                                                                                                                            true,
                                                                                                                        hint: 'Human readable name for this contract',
                                                                                                                    },
                                                                                                                    description:
                                                                                                                        {
                                                                                                                            label: 'Description',
                                                                                                                            type: 'text',
                                                                                                                        },
                                                                                                                    requireAllPermissions:
                                                                                                                        {
                                                                                                                            label: 'Require all permissions',
                                                                                                                            type: 'boolean',
                                                                                                                            defaultValue:
                                                                                                                                false,
                                                                                                                        },
                                                                                                                    permissions:
                                                                                                                        {
                                                                                                                            type: 'schema',
                                                                                                                            isRequired:
                                                                                                                                true,
                                                                                                                            isArray:
                                                                                                                                true,
                                                                                                                            minArrayLength: 0,
                                                                                                                            options:
                                                                                                                                {
                                                                                                                                    schema: {
                                                                                                                                        id: 'permission',
                                                                                                                                        version:
                                                                                                                                            'v2020_09_01',
                                                                                                                                        namespace:
                                                                                                                                            'Mercury',
                                                                                                                                        name: 'Permission',
                                                                                                                                        fields: {
                                                                                                                                            id: {
                                                                                                                                                label: 'id',
                                                                                                                                                type: 'text',
                                                                                                                                                isRequired:
                                                                                                                                                    true,
                                                                                                                                                hint: 'Hyphen separated id for this permission, e.g. can-unlock-doors',
                                                                                                                                            },
                                                                                                                                            name: {
                                                                                                                                                label: 'Name',
                                                                                                                                                type: 'text',
                                                                                                                                                isRequired:
                                                                                                                                                    true,
                                                                                                                                                hint: 'Human readable name for this permission',
                                                                                                                                            },
                                                                                                                                            description:
                                                                                                                                                {
                                                                                                                                                    label: 'Description',
                                                                                                                                                    type: 'text',
                                                                                                                                                },
                                                                                                                                            requireAllStatuses:
                                                                                                                                                {
                                                                                                                                                    label: 'Require all statuses',
                                                                                                                                                    type: 'boolean',
                                                                                                                                                    defaultValue:
                                                                                                                                                        false,
                                                                                                                                                },
                                                                                                                                            defaults:
                                                                                                                                                {
                                                                                                                                                    type: 'schema',
                                                                                                                                                    options:
                                                                                                                                                        {
                                                                                                                                                            schema: {
                                                                                                                                                                id: 'permissionDefaults',
                                                                                                                                                                version:
                                                                                                                                                                    'v2020_09_01',
                                                                                                                                                                namespace:
                                                                                                                                                                    'Mercury',
                                                                                                                                                                name: '',
                                                                                                                                                                fields: {
                                                                                                                                                                    skill: {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                    },
                                                                                                                                                                    owner: {
                                                                                                                                                                        label: 'Owner',
                                                                                                                                                                        type: 'schema',
                                                                                                                                                                        options:
                                                                                                                                                                            {
                                                                                                                                                                                schema: {
                                                                                                                                                                                    id: 'statusFlags',
                                                                                                                                                                                    version:
                                                                                                                                                                                        'v2020_09_01',
                                                                                                                                                                                    namespace:
                                                                                                                                                                                        'Mercury',
                                                                                                                                                                                    name: '',
                                                                                                                                                                                    fields: {
                                                                                                                                                                                        default:
                                                                                                                                                                                            {
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedIn:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked in',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedOut:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked out',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                            },
                                                                                                                                                                                        onPrem: {
                                                                                                                                                                                            label: 'On premise',
                                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                        },
                                                                                                                                                                                        offPrem:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Off premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                                                                            },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                    },
                                                                                                                                                                    groupManager:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Group manager',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    manager:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Manager',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    teammate:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Teammate',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                    guest: {
                                                                                                                                                                        label: 'Guest',
                                                                                                                                                                        type: 'schema',
                                                                                                                                                                        options:
                                                                                                                                                                            {
                                                                                                                                                                                schema: {
                                                                                                                                                                                    id: 'statusFlags',
                                                                                                                                                                                    version:
                                                                                                                                                                                        'v2020_09_01',
                                                                                                                                                                                    namespace:
                                                                                                                                                                                        'Mercury',
                                                                                                                                                                                    name: '',
                                                                                                                                                                                    fields: {
                                                                                                                                                                                        default:
                                                                                                                                                                                            {
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedIn:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked in',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                            },
                                                                                                                                                                                        clockedOut:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Clocked out',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                            },
                                                                                                                                                                                        onPrem: {
                                                                                                                                                                                            label: 'On premise',
                                                                                                                                                                                            type: 'boolean',
                                                                                                                                                                                            hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                        },
                                                                                                                                                                                        offPrem:
                                                                                                                                                                                            {
                                                                                                                                                                                                label: 'Off premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: "They aren't at the office or shop.",
                                                                                                                                                                                            },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                            },
                                                                                                                                                                    },
                                                                                                                                                                    anonymous:
                                                                                                                                                                        {
                                                                                                                                                                            label: 'Anonymous',
                                                                                                                                                                            type: 'schema',
                                                                                                                                                                            options:
                                                                                                                                                                                {
                                                                                                                                                                                    schema: {
                                                                                                                                                                                        id: 'statusFlags',
                                                                                                                                                                                        version:
                                                                                                                                                                                            'v2020_09_01',
                                                                                                                                                                                        namespace:
                                                                                                                                                                                            'Mercury',
                                                                                                                                                                                        name: '',
                                                                                                                                                                                        fields: {
                                                                                                                                                                                            default:
                                                                                                                                                                                                {
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'What is the fallback if no status is set?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedIn:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked in',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                                                },
                                                                                                                                                                                            clockedOut:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Clocked out',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: 'When someone is not working (off the clock).',
                                                                                                                                                                                                },
                                                                                                                                                                                            onPrem: {
                                                                                                                                                                                                label: 'On premise',
                                                                                                                                                                                                type: 'boolean',
                                                                                                                                                                                                hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                                            },
                                                                                                                                                                                            offPrem:
                                                                                                                                                                                                {
                                                                                                                                                                                                    label: 'Off premise',
                                                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                                                    hint: "They aren't at the office or shop.",
                                                                                                                                                                                                },
                                                                                                                                                                                        },
                                                                                                                                                                                    },
                                                                                                                                                                                },
                                                                                                                                                                        },
                                                                                                                                                                },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                            can: {
                                                                                                                                                type: 'schema',
                                                                                                                                                options:
                                                                                                                                                    {
                                                                                                                                                        schema: {
                                                                                                                                                            id: 'statusFlags',
                                                                                                                                                            version:
                                                                                                                                                                'v2020_09_01',
                                                                                                                                                            namespace:
                                                                                                                                                                'Mercury',
                                                                                                                                                            name: '',
                                                                                                                                                            fields: {
                                                                                                                                                                default:
                                                                                                                                                                    {
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'What is the fallback if no status is set?',
                                                                                                                                                                    },
                                                                                                                                                                clockedIn:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked in',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'Is the person clocked in and ready to rock?',
                                                                                                                                                                    },
                                                                                                                                                                clockedOut:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Clocked out',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: 'When someone is not working (off the clock).',
                                                                                                                                                                    },
                                                                                                                                                                onPrem: {
                                                                                                                                                                    label: 'On premise',
                                                                                                                                                                    type: 'boolean',
                                                                                                                                                                    hint: 'Are they at work (maybe working, maybe visiting).',
                                                                                                                                                                },
                                                                                                                                                                offPrem:
                                                                                                                                                                    {
                                                                                                                                                                        label: 'Off premise',
                                                                                                                                                                        type: 'boolean',
                                                                                                                                                                        hint: "They aren't at the office or shop.",
                                                                                                                                                                    },
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                    },
                                                                                                                                            },
                                                                                                                                        },
                                                                                                                                    },
                                                                                                                                },
                                                                                                                        },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                },
                                                                                        },
                                                                                    },
                                                                                },
                                                                        },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'registerEventsResponsePayload',
                    fields: {},
                },
            },
            'register-listeners::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'registerListenersEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'registerListenersEmitPayload',
                                    fields: {
                                        fullyQualifiedEventNames: {
                                            type: 'text',
                                            isRequired: true,
                                            isArray: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'register-skill::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'registerSkillEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'registerSkillEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'registerSkillResponsePayload',
                    fields: {
                        skill: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'skill',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Skill',
                                    description:
                                        'An ability Sprucebot has learned.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        apiKey: {
                                            label: 'Id',
                                            type: 'id',
                                            isPrivate: true,
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        creators: {
                                            label: 'Creators',
                                            type: 'schema',
                                            isPrivate: true,
                                            isRequired: true,
                                            hint: 'The people or skills who created and own this skill.',
                                            isArray: true,
                                            options: {
                                                schema: {
                                                    id: 'skillCreator',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Skill creator',
                                                    fields: {
                                                        skillId: {
                                                            type: 'text',
                                                        },
                                                        personId: {
                                                            type: 'text',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'request-pin::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'requestPinEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'requestPinEmitPayload',
                                    fields: {
                                        phone: {
                                            type: 'phone',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'requestPinResponsePayload',
                    fields: {
                        challenge: {
                            type: 'text',
                            isRequired: true,
                        },
                    },
                },
            },
            'scramble-account::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'scrambleAccountResponsePayload',
                    fields: {},
                },
            },
            'send-message::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'sendMessageEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'sendMessageTargetPayload',
                                    fields: {
                                        locationId: {
                                            type: 'id',
                                        },
                                        personId: {
                                            type: 'id',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        skillId: {
                                            type: 'id',
                                        },
                                        roleId: {
                                            type: 'id',
                                        },
                                        phone: {
                                            type: 'phone',
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'sendMessageEmitPayload',
                                    fields: {
                                        message: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'sendMessageMessagePayload',
                                                    fields: {
                                                        classification: {
                                                            type: 'select',
                                                            isRequired: true,
                                                            options: {
                                                                choices: [
                                                                    {
                                                                        value: 'auth',
                                                                        label: 'Auth',
                                                                    },
                                                                    {
                                                                        value: 'transactional',
                                                                        label: 'transactional',
                                                                    },
                                                                    {
                                                                        value: 'promotional',
                                                                        label: 'Promotional',
                                                                    },
                                                                    {
                                                                        value: 'incoming',
                                                                        label: 'incoming',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                        body: {
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        context: {
                                                            type: 'raw',
                                                            isPrivate: true,
                                                            options: {
                                                                valueType:
                                                                    'Record<string, any>',
                                                            },
                                                        },
                                                        topicId: {
                                                            type: 'id',
                                                        },
                                                        choices: {
                                                            type: 'schema',
                                                            isArray: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'fullMessageChoices',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: '',
                                                                    fields: {
                                                                        value: {
                                                                            type: 'text',
                                                                            isRequired:
                                                                                true,
                                                                        },
                                                                        label: {
                                                                            type: 'text',
                                                                            isRequired:
                                                                                true,
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'sendMessageResponsePayload',
                    fields: {
                        message: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'message',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: '',
                                    description:
                                        'A discrete communication between two humans or a human and a machine.',
                                    fields: {
                                        id: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateSent: {
                                            type: 'number',
                                        },
                                        target: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'messageTarget',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: '',
                                                    fields: {
                                                        locationId: {
                                                            type: 'id',
                                                        },
                                                        personId: {
                                                            type: 'id',
                                                        },
                                                        organizationId: {
                                                            type: 'id',
                                                        },
                                                        skillId: {
                                                            type: 'id',
                                                        },
                                                        roleId: {
                                                            type: 'id',
                                                        },
                                                        phone: {
                                                            type: 'phone',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        source: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'messageSource',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: '',
                                                    fields: {
                                                        locationId: {
                                                            type: 'id',
                                                        },
                                                        personId: {
                                                            type: 'id',
                                                        },
                                                        organizationId: {
                                                            type: 'id',
                                                        },
                                                        skillId: {
                                                            type: 'id',
                                                        },
                                                        roleId: {
                                                            type: 'id',
                                                        },
                                                        isCore: {
                                                            type: 'boolean',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        errors: {
                                            type: 'text',
                                            isPrivate: true,
                                            isArray: true,
                                        },
                                        classification: {
                                            type: 'select',
                                            isRequired: true,
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'auth',
                                                        label: 'Auth',
                                                    },
                                                    {
                                                        value: 'transactional',
                                                        label: 'transactional',
                                                    },
                                                    {
                                                        value: 'promotional',
                                                        label: 'Promotional',
                                                    },
                                                    {
                                                        value: 'incoming',
                                                        label: 'incoming',
                                                    },
                                                ],
                                            },
                                        },
                                        status: {
                                            type: 'select',
                                            isPrivate: true,
                                            defaultValue: 'pending',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'pending',
                                                        label: 'Pending',
                                                    },
                                                    {
                                                        value: 'processing',
                                                        label: 'Processing',
                                                    },
                                                    {
                                                        value: 'sent',
                                                        label: 'Sent',
                                                    },
                                                    {
                                                        value: 'failed',
                                                        label: 'Failed',
                                                    },
                                                    {
                                                        value: 'ignored',
                                                        label: 'Ignored',
                                                    },
                                                ],
                                            },
                                        },
                                        body: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        context: {
                                            type: 'raw',
                                            isPrivate: true,
                                            options: {
                                                valueType:
                                                    'Record<string, any>',
                                            },
                                        },
                                        topicId: {
                                            type: 'id',
                                        },
                                        choices: {
                                            type: 'schema',
                                            isArray: true,
                                            options: {
                                                schema: {
                                                    id: 'fullMessageChoices',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: '',
                                                    fields: {
                                                        value: {
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        label: {
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'set-role::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'setRoleEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'setRoleEmitTarget',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'setRoleEmitPayload',
                                    fields: {
                                        personId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        roleId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'setRoleResponsePayload',
                    fields: {},
                },
                emitPermissionContract: {
                    id: 'hiring-and-promoting',
                    name: 'Hiring and promoting contract',
                    description:
                        'Various permissions related to emitting hiring and promoting people at organizations and locations.',
                    requireAllPermissions: false,
                    permissions: [
                        {
                            id: 'hiring-and-promoting',
                            name: 'Hire a person',
                            defaults: {
                                owner: {
                                    default: true,
                                },
                                groupManager: {
                                    clockedIn: true,
                                },
                                manager: {
                                    clockedIn: true,
                                },
                            },
                        },
                    ],
                },
            },
            'uninstall-skill::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'uninstallSkillEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'unInstallSkillEmitTarget',
                                    fields: {
                                        skillId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'unInstallSkillResponsePayload',
                    fields: {},
                },
            },
            'unregister-conversation-topics::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'unregisterConversationTopicsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'unregisterConversationTopicsEmitPayload',
                                    fields: {
                                        topics: {
                                            type: 'text',
                                            isArray: true,
                                        },
                                        shouldUnregisterAll: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'unregisterConversationTopicsResponsePayload',
                    fields: {},
                },
            },
            'unregister-events::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'unregisterEventsEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'unregisterEventsEmitPayload',
                                    fields: {
                                        eventNames: {
                                            type: 'text',
                                            isArray: true,
                                        },
                                        shouldUnregisterAll: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'unregisterEventsResponsePayload',
                    fields: {},
                },
            },
            'unregister-listeners::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'unregisterListenersEmitTargetAndPayload',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'unregisterListenersEmitPayload',
                                    fields: {
                                        fullyQualifiedEventNames: {
                                            type: 'text',
                                            isArray: true,
                                        },
                                        shouldUnregisterAll: {
                                            type: 'boolean',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'unregisterListenersResponsePayload',
                    fields: {
                        unregisterCount: {
                            type: 'number',
                            isRequired: true,
                        },
                    },
                },
            },
            'unregister-skill::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'unregisterSkillEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'unregisterSkillEmitTarget',
                                    fields: {
                                        skillId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'unregisterSkillResponsePayload',
                    fields: {},
                },
            },
            'update-location::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'updateLocationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'updateLocationEmitTarget',
                                    fields: {
                                        locationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'updateLocationEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                            isRequired: false,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                            isRequired: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                            isRequired: false,
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                            isRequired: false,
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: false,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'updateLocationResponsePayload',
                    fields: {
                        location: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'location',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Location',
                                    description:
                                        'A physical location where people meet. An organization has at least one of them.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        num: {
                                            label: 'Store number',
                                            type: 'text',
                                            hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Is this location viewable by guests?',
                                            defaultValue: false,
                                        },
                                        phone: {
                                            label: 'Main Phone',
                                            type: 'phone',
                                        },
                                        timezone: {
                                            label: 'Timezone',
                                            type: 'select',
                                            options: {
                                                choices: [
                                                    {
                                                        value: 'etc/gmt+12',
                                                        label: 'International Date Line West',
                                                    },
                                                    {
                                                        value: 'pacific/midway',
                                                        label: 'Midway Island, Samoa',
                                                    },
                                                    {
                                                        value: 'pacific/honolulu',
                                                        label: 'Hawaii',
                                                    },
                                                    {
                                                        value: 'us/alaska',
                                                        label: 'Alaska',
                                                    },
                                                    {
                                                        value: 'america/los_Angeles',
                                                        label: 'Pacific Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/tijuana',
                                                        label: 'Tijuana, Baja California',
                                                    },
                                                    {
                                                        value: 'us/arizona',
                                                        label: 'Arizona',
                                                    },
                                                    {
                                                        value: 'america/chihuahua',
                                                        label: 'Chihuahua, La Paz, Mazatlan',
                                                    },
                                                    {
                                                        value: 'us/mountain',
                                                        label: 'Mountain Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/managua',
                                                        label: 'Central America',
                                                    },
                                                    {
                                                        value: 'us/central',
                                                        label: 'Central Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'america/mexico_City',
                                                        label: 'Guadalajara, Mexico City, Monterrey',
                                                    },
                                                    {
                                                        value: 'Canada/Saskatchewan',
                                                        label: 'Saskatchewan',
                                                    },
                                                    {
                                                        value: 'america/bogota',
                                                        label: 'Bogota, Lima, Quito, Rio Branco',
                                                    },
                                                    {
                                                        value: 'us/eastern',
                                                        label: 'Eastern Time (US & Canada)',
                                                    },
                                                    {
                                                        value: 'us/east-indiana',
                                                        label: 'Indiana (East)',
                                                    },
                                                    {
                                                        value: 'Canada/atlantic',
                                                        label: 'Atlantic Time (Canada)',
                                                    },
                                                    {
                                                        value: 'america/caracas',
                                                        label: 'Caracas, La Paz',
                                                    },
                                                    {
                                                        value: 'america/manaus',
                                                        label: 'Manaus',
                                                    },
                                                    {
                                                        value: 'america/Santiago',
                                                        label: 'Santiago',
                                                    },
                                                    {
                                                        value: 'Canada/Newfoundland',
                                                        label: 'Newfoundland',
                                                    },
                                                    {
                                                        value: 'america/Sao_Paulo',
                                                        label: 'Brasilia',
                                                    },
                                                    {
                                                        value: 'america/argentina/buenos_Aires',
                                                        label: 'Buenos Aires, Georgetown',
                                                    },
                                                    {
                                                        value: 'america/godthab',
                                                        label: 'Greenland',
                                                    },
                                                    {
                                                        value: 'america/montevideo',
                                                        label: 'Montevideo',
                                                    },
                                                    {
                                                        value: 'america/Noronha',
                                                        label: 'Mid-Atlantic',
                                                    },
                                                    {
                                                        value: 'atlantic/cape_Verde',
                                                        label: 'Cape Verde Is.',
                                                    },
                                                    {
                                                        value: 'atlantic/azores',
                                                        label: 'Azores',
                                                    },
                                                    {
                                                        value: 'africa/casablanca',
                                                        label: 'Casablanca, Monrovia, Reykjavik',
                                                    },
                                                    {
                                                        value: 'etc/gmt',
                                                        label: 'Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
                                                    },
                                                    {
                                                        value: 'europe/amsterdam',
                                                        label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
                                                    },
                                                    {
                                                        value: 'europe/belgrade',
                                                        label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
                                                    },
                                                    {
                                                        value: 'europe/brussels',
                                                        label: 'Brussels, Copenhagen, Madrid, Paris',
                                                    },
                                                    {
                                                        value: 'europe/Sarajevo',
                                                        label: 'Sarajevo, Skopje, Warsaw, Zagreb',
                                                    },
                                                    {
                                                        value: 'africa/lagos',
                                                        label: 'West Central Africa',
                                                    },
                                                    {
                                                        value: 'asia/amman',
                                                        label: 'Amman',
                                                    },
                                                    {
                                                        value: 'europe/athens',
                                                        label: 'Athens, Bucharest, Istanbul',
                                                    },
                                                    {
                                                        value: 'asia/beirut',
                                                        label: 'Beirut',
                                                    },
                                                    {
                                                        value: 'africa/cairo',
                                                        label: 'Cairo',
                                                    },
                                                    {
                                                        value: 'africa/Harare',
                                                        label: 'Harare, Pretoria',
                                                    },
                                                    {
                                                        value: 'europe/Helsinki',
                                                        label: 'Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
                                                    },
                                                    {
                                                        value: 'asia/Jerusalem',
                                                        label: 'Jerusalem',
                                                    },
                                                    {
                                                        value: 'europe/minsk',
                                                        label: 'Minsk',
                                                    },
                                                    {
                                                        value: 'africa/Windhoek',
                                                        label: 'Windhoek',
                                                    },
                                                    {
                                                        value: 'asia/Kuwait',
                                                        label: 'Kuwait, Riyadh, Baghdad',
                                                    },
                                                    {
                                                        value: 'europe/moscow',
                                                        label: 'Moscow, St. Petersburg, Volgograd',
                                                    },
                                                    {
                                                        value: 'africa/Nairobi',
                                                        label: 'Nairobi',
                                                    },
                                                    {
                                                        value: 'asia/tbilisi',
                                                        label: 'Tbilisi',
                                                    },
                                                    {
                                                        value: 'asia/tehran',
                                                        label: 'Tehran',
                                                    },
                                                    {
                                                        value: 'asia/muscat',
                                                        label: 'Abu Dhabi, Muscat',
                                                    },
                                                    {
                                                        value: 'asia/baku',
                                                        label: 'Baku',
                                                    },
                                                    {
                                                        value: 'asia/Yerevan',
                                                        label: 'Yerevan',
                                                    },
                                                    {
                                                        value: 'asia/Kabul',
                                                        label: 'Kabul',
                                                    },
                                                    {
                                                        value: 'asia/Yekaterinburg',
                                                        label: 'Yekaterinburg',
                                                    },
                                                    {
                                                        value: 'asia/Karachi',
                                                        label: 'Islamabad, Karachi, Tashkent',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Chennai, Kolkata, Mumbai, New Delhi',
                                                    },
                                                    {
                                                        value: 'asia/calcutta',
                                                        label: 'Sri Jayawardenapura',
                                                    },
                                                    {
                                                        value: 'asia/Katmandu',
                                                        label: 'Kathmandu',
                                                    },
                                                    {
                                                        value: 'asia/almaty',
                                                        label: 'Almaty, Novosibirsk',
                                                    },
                                                    {
                                                        value: 'asia/Dhaka',
                                                        label: 'Astana, Dhaka',
                                                    },
                                                    {
                                                        value: 'asia/Rangoon',
                                                        label: 'Yangon (Rangoon)',
                                                    },
                                                    {
                                                        value: 'asia/bangkok',
                                                        label: 'Bangkok, Hanoi, Jakarta',
                                                    },
                                                    {
                                                        value: 'asia/Krasnoyarsk',
                                                        label: 'Krasnoyarsk',
                                                    },
                                                    {
                                                        value: 'asia/Hong_Kong',
                                                        label: 'Beijing, Chongqing, Hong Kong, Urumqi',
                                                    },
                                                    {
                                                        value: 'asia/Kuala_Lumpur',
                                                        label: 'Kuala Lumpur, Singapore',
                                                    },
                                                    {
                                                        value: 'asia/Irkutsk',
                                                        label: 'Irkutsk, Ulaan Bataar',
                                                    },
                                                    {
                                                        value: 'Australia/Perth',
                                                        label: 'Perth',
                                                    },
                                                    {
                                                        value: 'asia/taipei',
                                                        label: 'Taipei',
                                                    },
                                                    {
                                                        value: 'asia/tokyo',
                                                        label: 'Osaka, Sapporo, Tokyo',
                                                    },
                                                    {
                                                        value: 'asia/Seoul',
                                                        label: 'Seoul',
                                                    },
                                                    {
                                                        value: 'asia/Yakutsk',
                                                        label: 'Yakutsk',
                                                    },
                                                    {
                                                        value: 'Australia/adelaide',
                                                        label: 'Adelaide',
                                                    },
                                                    {
                                                        value: 'Australia/Darwin',
                                                        label: 'Darwin',
                                                    },
                                                    {
                                                        value: 'Australia/brisbane',
                                                        label: 'Brisbane',
                                                    },
                                                    {
                                                        value: 'Australia/canberra',
                                                        label: 'Canberra, Melbourne, Sydney',
                                                    },
                                                    {
                                                        value: 'Australia/Hobart',
                                                        label: 'Hobart',
                                                    },
                                                    {
                                                        value: 'pacific/guam',
                                                        label: 'Guam, Port Moresby',
                                                    },
                                                    {
                                                        value: 'asia/Vladivostok',
                                                        label: 'Vladivostok',
                                                    },
                                                    {
                                                        value: 'asia/magadan',
                                                        label: 'Magadan, Solomon Is., New Caledonia',
                                                    },
                                                    {
                                                        value: 'pacific/auckland',
                                                        label: 'Auckland, Wellington',
                                                    },
                                                    {
                                                        value: 'pacific/Fiji',
                                                        label: 'Fiji, Kamchatka, Marshall Is.',
                                                    },
                                                    {
                                                        value: 'pacific/tongatapu',
                                                        label: "Nuku'alofa",
                                                    },
                                                ],
                                            },
                                        },
                                        address: {
                                            label: 'Address',
                                            type: 'address',
                                            isRequired: true,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'update-organization::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'updateOrganizationEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'updateOrgEmitTarget',
                                    fields: {
                                        organizationId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'updateOrgEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'updateOrgResponsePayload',
                    fields: {
                        organization: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'updateOrg',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        slug: {
                                            label: 'Slug',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'update-role::v2020_12_25': {
                emitPayloadSchema: {
                    id: 'updateRoleEmitTargetAndPayload',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'updateRoleEmitTarget',
                                    fields: {
                                        roleId: {
                                            type: 'id',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                        payload: {
                            type: 'schema',
                            isRequired: false,
                            options: {
                                schema: {
                                    id: 'updateRoleEmitPayload',
                                    fields: {
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                            isRequired: false,
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                            isRequired: false,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                            isRequired: false,
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                            isRequired: false,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'updateRoleResponsePayload',
                    fields: {
                        role: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'role',
                                    version: 'v2020_07_22',
                                    namespace: 'Spruce',
                                    name: 'Role',
                                    description:
                                        'Every role in Spruce inherits from 5 bases. Owner, Group Manager, Manager, Teammate, and Guest.',
                                    fields: {
                                        id: {
                                            label: 'Id',
                                            type: 'id',
                                            isRequired: true,
                                        },
                                        name: {
                                            label: 'Name',
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        base: {
                                            label: 'Base',
                                            type: 'select',
                                            hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
                                            options: {
                                                choices: [
                                                    {
                                                        label: 'Owner',
                                                        value: 'owner',
                                                    },
                                                    {
                                                        label: 'Group manager',
                                                        value: 'groupManager',
                                                    },
                                                    {
                                                        label: 'Manager',
                                                        value: 'manager',
                                                    },
                                                    {
                                                        label: 'Teammate',
                                                        value: 'teammate',
                                                    },
                                                    {
                                                        label: 'Guest',
                                                        value: 'guest',
                                                    },
                                                    {
                                                        label: 'Anonymous',
                                                        value: 'anonymous',
                                                    },
                                                ],
                                            },
                                        },
                                        description: {
                                            label: 'Description',
                                            type: 'text',
                                        },
                                        dateCreated: {
                                            type: 'number',
                                            isRequired: true,
                                        },
                                        dateDeleted: {
                                            type: 'number',
                                        },
                                        organizationId: {
                                            type: 'id',
                                        },
                                        isPublic: {
                                            label: 'Public',
                                            type: 'boolean',
                                            hint: 'Should I let people that are not part of this organization this role?',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'whoami::v2020_12_25': {
                responsePayloadSchema: {
                    id: 'authenticateResponsePayload',
                    fields: {
                        type: {
                            type: 'select',
                            isRequired: true,
                            options: {
                                choices: [
                                    {
                                        value: 'authenticated',
                                        label: 'Authenticated',
                                    },
                                    {
                                        value: 'anonymous',
                                        label: 'Anonymous',
                                    },
                                ],
                            },
                        },
                        auth: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'authSchema',
                                    fields: {
                                        person: {
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'person',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Person',
                                                    description:
                                                        'A human being.',
                                                    fields: {
                                                        id: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isRequired: true,
                                                        },
                                                        firstName: {
                                                            label: 'First name',
                                                            type: 'text',
                                                            isPrivate: true,
                                                        },
                                                        lastName: {
                                                            label: 'Last name',
                                                            type: 'text',
                                                            isPrivate: true,
                                                        },
                                                        casualName: {
                                                            label: 'Casual name',
                                                            type: 'text',
                                                            isRequired: true,
                                                            hint: 'The name you can use when talking to this person.',
                                                        },
                                                        phone: {
                                                            label: 'Phone',
                                                            type: 'phone',
                                                            isPrivate: true,
                                                            hint: 'A number that can be texted',
                                                        },
                                                        profileImages: {
                                                            label: 'Profile photos',
                                                            type: 'schema',
                                                            options: {
                                                                schema: {
                                                                    id: 'profileImage',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: 'Profile Image Sizes',
                                                                    description:
                                                                        'Various sizes that a profile image comes in.',
                                                                    fields: {
                                                                        profile60:
                                                                            {
                                                                                label: '60x60',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        profile150:
                                                                            {
                                                                                label: '150x150',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        'profile60@2x':
                                                                            {
                                                                                label: '60x60',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                        'profile150@2x':
                                                                            {
                                                                                label: '150x150',
                                                                                type: 'text',
                                                                                isRequired:
                                                                                    true,
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        dateCreated: {
                                                            type: 'number',
                                                            isRequired: true,
                                                        },
                                                        dateScrambled: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        skill: {
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'skill',
                                                    version: 'v2020_07_22',
                                                    namespace: 'Spruce',
                                                    name: 'Skill',
                                                    description:
                                                        'An ability Sprucebot has learned.',
                                                    fields: {
                                                        id: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isRequired: true,
                                                        },
                                                        apiKey: {
                                                            label: 'Id',
                                                            type: 'id',
                                                            isPrivate: true,
                                                            isRequired: true,
                                                        },
                                                        name: {
                                                            label: 'Name',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        description: {
                                                            label: 'Description',
                                                            type: 'text',
                                                        },
                                                        slug: {
                                                            label: 'Slug',
                                                            type: 'text',
                                                            isRequired: true,
                                                        },
                                                        creators: {
                                                            label: 'Creators',
                                                            type: 'schema',
                                                            isPrivate: true,
                                                            isRequired: true,
                                                            hint: 'The people or skills who created and own this skill.',
                                                            isArray: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'skillCreator',
                                                                    version:
                                                                        'v2020_07_22',
                                                                    namespace:
                                                                        'Spruce',
                                                                    name: 'Skill creator',
                                                                    fields: {
                                                                        skillId:
                                                                            {
                                                                                type: 'text',
                                                                            },
                                                                        personId:
                                                                            {
                                                                                type: 'text',
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        dateCreated: {
                                                            type: 'number',
                                                            isRequired: true,
                                                        },
                                                        dateDeleted: {
                                                            type: 'number',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    buildEventContract({
        eventSignatures: {
            'heartwood.get-skill-views::v2021_02_11': {
                isGlobal: true,
                emitPayloadSchema: {
                    id: 'getSkillViewsEmitTargetAndPayload',
                    version: 'v2021_02_11',
                    namespace: 'Heartwood',
                    name: '',
                    fields: {
                        target: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'getViewControllersEmitTarget',
                                    version: 'v2021_02_11',
                                    namespace: 'Heartwood',
                                    name: '',
                                    fields: {
                                        namespace: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'getSkillViewsResponsePayload',
                    version: 'v2021_02_11',
                    namespace: 'Heartwood',
                    name: '',
                    fields: {
                        id: {
                            type: 'id',
                            isRequired: true,
                        },
                        ids: {
                            type: 'text',
                            isRequired: true,
                            isArray: true,
                        },
                        source: {
                            type: 'text',
                            isRequired: true,
                        },
                        theme: {
                            type: 'schema',
                            options: {
                                schema: {
                                    id: 'registerationTheme',
                                    version: 'v2021_02_11',
                                    namespace: 'Heartwood',
                                    name: '',
                                    fields: {
                                        props: {
                                            type: 'schema',
                                            isRequired: true,
                                            options: {
                                                schema: {
                                                    id: 'themeProps',
                                                    version: 'v2021_02_11',
                                                    namespace: 'Heartwood',
                                                    name: '',
                                                    fields: {
                                                        color1: {
                                                            label: 'Color 1',
                                                            type: 'text',
                                                            hint: 'Used to color anything overlayed on the background (color1Inverse or color1InverseGradient).',
                                                        },
                                                        color1Inverse: {
                                                            label: 'Color 1 (inverse)',
                                                            type: 'text',
                                                            hint: 'Background color of the view if color1InverseGradient is not set',
                                                        },
                                                        color1InverseGradient: {
                                                            label: 'Color 1 Gradient (inverse)',
                                                            type: 'text',
                                                            hint: 'Background griedent applied to view.',
                                                        },
                                                        color2: {
                                                            label: 'Color 2',
                                                            type: 'text',
                                                            hint: 'The color of anything overlayed on the background of a card (color2Inverse)',
                                                        },
                                                        color2Transparent: {
                                                            label: 'Color 2',
                                                            type: 'text',
                                                            hint: 'The color of overlays ontop of a card.',
                                                        },
                                                        color2Inverse: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'Background color of cards.',
                                                        },
                                                        color2InverseTransparent:
                                                            {
                                                                label: 'Color 2 (inverse with transparency)',
                                                                type: 'text',
                                                                hint: 'Background color used when some transparency is needed for context.',
                                                            },
                                                        color3: {
                                                            label: 'Color 3',
                                                            type: 'text',
                                                            hint: 'Titles of cards.',
                                                        },
                                                        color3Compliment: {
                                                            label: 'Color 3 (compliment)',
                                                            type: 'text',
                                                            hint: 'Subtitles of cards.',
                                                        },
                                                        color3Inverse: {
                                                            label: 'Color 3 (inverse)',
                                                            type: 'text',
                                                            hint: 'Subtitles of cards.',
                                                        },
                                                        color4: {
                                                            label: 'Color 4',
                                                            type: 'text',
                                                            hint: 'Foreground for buttons and menu items.',
                                                        },
                                                        color4Compliment: {
                                                            label: 'Color 4',
                                                            type: 'text',
                                                            hint: 'Border, outlines and highlights',
                                                        },
                                                        color4Inverse: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'Background for buttons and menu itemsu',
                                                        },
                                                        color4InverseCompliment:
                                                            {
                                                                label: 'Color (inverse, compliment)',
                                                                type: 'text',
                                                                hint: 'Background for buttons and menu items',
                                                            },
                                                        controlBarColor1: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'The foreground color of the control bar.',
                                                        },
                                                        controlBarColor2: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'The background color of the control bar.',
                                                        },
                                                        errorColor1: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'Errors overlayed on a background colored with errorColor1Inverse.',
                                                        },
                                                        errorColor1Inverse: {
                                                            label: 'Color',
                                                            type: 'text',
                                                            hint: 'The background used when rendering errors.',
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            'heartwood.register-skill-views::v2021_02_11': {
                isGlobal: true,
                emitPayloadSchema: {
                    id: 'registerSkillViewsEmitTargetAndPayload',
                    version: 'v2021_02_11',
                    namespace: 'Heartwood',
                    name: '',
                    fields: {
                        payload: {
                            type: 'schema',
                            isRequired: true,
                            options: {
                                schema: {
                                    id: 'registerSkillViewsEmitPayload',
                                    version: 'v2021_02_11',
                                    namespace: 'Heartwood',
                                    name: '',
                                    fields: {
                                        ids: {
                                            type: 'text',
                                            isRequired: true,
                                            isArray: true,
                                        },
                                        source: {
                                            type: 'text',
                                            isRequired: true,
                                        },
                                        theme: {
                                            type: 'schema',
                                            options: {
                                                schema: {
                                                    id: 'registerationTheme',
                                                    version: 'v2021_02_11',
                                                    namespace: 'Heartwood',
                                                    name: '',
                                                    fields: {
                                                        name: {
                                                            type: 'text',
                                                        },
                                                        props: {
                                                            type: 'schema',
                                                            isRequired: true,
                                                            options: {
                                                                schema: {
                                                                    id: 'themeProps',
                                                                    version:
                                                                        'v2021_02_11',
                                                                    namespace:
                                                                        'Heartwood',
                                                                    name: '',
                                                                    fields: {
                                                                        color1: {
                                                                            label: 'Color 1',
                                                                            type: 'text',
                                                                            hint: 'Used to color anything overlayed on the background (color1Inverse or color1InverseGradient).',
                                                                        },
                                                                        color1Inverse:
                                                                            {
                                                                                label: 'Color 1 (inverse)',
                                                                                type: 'text',
                                                                                hint: 'Background color of the view if color1InverseGradient is not set',
                                                                            },
                                                                        color1InverseGradient:
                                                                            {
                                                                                label: 'Color 1 Gradient (inverse)',
                                                                                type: 'text',
                                                                                hint: 'Background griedent applied to view.',
                                                                            },
                                                                        color2: {
                                                                            label: 'Color 2',
                                                                            type: 'text',
                                                                            hint: 'The color of anything overlayed on the background of a card (color2Inverse)',
                                                                        },
                                                                        color2Transparent:
                                                                            {
                                                                                label: 'Color 2',
                                                                                type: 'text',
                                                                                hint: 'The color of overlays ontop of a card.',
                                                                            },
                                                                        color2Inverse:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'Background color of cards.',
                                                                            },
                                                                        color2InverseTransparent:
                                                                            {
                                                                                label: 'Color 2 (inverse with transparency)',
                                                                                type: 'text',
                                                                                hint: 'Background color used when some transparency is needed for context.',
                                                                            },
                                                                        color3: {
                                                                            label: 'Color 3',
                                                                            type: 'text',
                                                                            hint: 'Titles of cards.',
                                                                        },
                                                                        color3Compliment:
                                                                            {
                                                                                label: 'Color 3 (compliment)',
                                                                                type: 'text',
                                                                                hint: 'Subtitles of cards.',
                                                                            },
                                                                        color3Inverse:
                                                                            {
                                                                                label: 'Color 3 (inverse)',
                                                                                type: 'text',
                                                                                hint: 'Subtitles of cards.',
                                                                            },
                                                                        color4: {
                                                                            label: 'Color 4',
                                                                            type: 'text',
                                                                            hint: 'Foreground for buttons and menu items.',
                                                                        },
                                                                        color4Compliment:
                                                                            {
                                                                                label: 'Color 4',
                                                                                type: 'text',
                                                                                hint: 'Border, outlines and highlights',
                                                                            },
                                                                        color4Inverse:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'Background for buttons and menu itemsu',
                                                                            },
                                                                        color4InverseCompliment:
                                                                            {
                                                                                label: 'Color (inverse, compliment)',
                                                                                type: 'text',
                                                                                hint: 'Background for buttons and menu items',
                                                                            },
                                                                        controlBarColor1:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'The foreground color of the control bar.',
                                                                            },
                                                                        controlBarColor2:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'The background color of the control bar.',
                                                                            },
                                                                        errorColor1:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'Errors overlayed on a background colored with errorColor1Inverse.',
                                                                            },
                                                                        errorColor1Inverse:
                                                                            {
                                                                                label: 'Color',
                                                                                type: 'text',
                                                                                hint: 'The background used when rendering errors.',
                                                                            },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                responsePayloadSchema: {
                    id: 'registerSkillViewsResponsePayload',
                    version: 'v2021_02_11',
                    namespace: 'Heartwood',
                    name: '',
                    fields: {
                        totalRegistered: {
                            type: 'number',
                            isRequired: true,
                            hint: 'Views that were registered. Will match the number of ids you sent.',
                        },
                    },
                },
            },
        },
    }),
] as const

export default eventContracts
export type CoreEventContract = (typeof eventContracts)[0] &
    (typeof eventContracts)[1]
