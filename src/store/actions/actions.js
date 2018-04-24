export const ChangeResource = (resource, value) => {
    return {
        type: 'CHANGE_RESOURCE',
        payload: {
            resource,
            value
        }
    }
}
