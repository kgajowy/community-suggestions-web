import Suggestion from '../interfaces/suggestion'

const someData: Suggestion[] = new Array(10).fill(
    {
        title: 'React dla początkujących',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
)

export const getSuggestions = () : Promise<Suggestion[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(someData), 2000)
    })
}