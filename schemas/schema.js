import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import course from './course'
import feedback from './feedback'
import member from './member'

export default createSchema({

  name: 'simbolo',
  types: schemaTypes.concat([
    course, feedback, member
  ]),
})
