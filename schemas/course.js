export default {
    title: 'Course',
    name: 'course',
    type: 'document',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'Title'
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image'
        },
        {
            type: 'string',
            name: 'slug',
            title: 'Slug'
        },
        {
            type: 'text',
            name: 'description',
            title: 'Description'
        },
        {
            type: 'string',
            name: 'form',
            title: 'Register Link'
        },
        {
            type: 'array',
            name: 'outline',
            title: 'Course Outline',
            of: [{
                type: 'object',
                name: 'items',
                title: 'Items',
                fields: [
                    {
                        type: 'string',
                        name: 'itemTitle',
                        title: 'Item Title'
                    },
                    {
                        type: 'array',
                        name: 'subItems',
                        title: 'Sub Items',
                        of: [{ type: 'string' }]
                    }
                ]
            }]
        },
        {
            type: 'markdown',
            name: 'detail',
            title: 'Course Details'
        },
        {
            type: 'markdown',
            name: 'prerequisites',
            title: 'Prerequisites'
        },
        {
            type: 'object',
            name: 'instructor',
            title: 'Instructor',
            fields: [
                {
                    type: 'image',
                    name: 'instructorImage',
                    title: 'Image'
                },
                {
                    type: 'string',
                    name: 'instructorName',
                    title: 'Name'
                },
                {
                    type: 'markdown',
                    name: 'instructorAbout',
                    title: 'About'
                },
            ]
        },
        {
            type: 'string',
            name: 'feeAndDuration',
            title: 'Fee and Duration'
        },
        {
            type: 'string',
            name: 'time',
            title: 'Time'
        }
    ]
}