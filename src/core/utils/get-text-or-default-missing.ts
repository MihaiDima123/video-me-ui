import isEmpty from 'lodash/isEmpty'

const getTextOrDefaultMissing = (text?: string) => (
    isEmpty(text) ? 'N/A' : text
)

export default getTextOrDefaultMissing
