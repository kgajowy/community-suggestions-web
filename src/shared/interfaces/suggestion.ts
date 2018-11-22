import {Person} from '../../people/person'

export default interface Suggestion {
    title: string
    description: string
    voters: Person[]
    supporters: Person[]
}